import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreatePenukaranDto } from './dto/create-penukaran_point.dto';
import { UpdatePenukaranDto } from './dto/update-penukaran_point.dto';

@Injectable()
export class PenukaranService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createPenukaranDto: CreatePenukaranDto,
    userId: number,
  ) {
    // Cari nasabah berdasarkan user yang sedang login
    const nasabah = await this.prisma.nasabah.findUnique({
      where: {
        userId: userId,
      },
    });

    if (!nasabah) {
      throw new NotFoundException(
        'Anda belum terdaftar sebagai nasabah',
      );
    }

    // Cari hadiah
    const hadiah = await this.prisma.hadiah.findUnique({
      where: {
        id: createPenukaranDto.hadiahId,
      },
    });

    if (!hadiah) {
      throw new NotFoundException(
        'Hadiah tidak ditemukan',
      );
    }

    // Cek stok
    if (hadiah.stock <= 0) {
      throw new BadRequestException(
        'Stok hadiah sudah habis',
      );
    }

    // Cek apakah poin cukup
    if (nasabah.saldo_poin < hadiah.poin_dibutuhkan) {
      throw new BadRequestException(
        'Saldo poin tidak mencukupi',
      );
    }

    // Hitung otomatis
    const poinTerpakai = hadiah.poin_dibutuhkan;

    const sisaPoint =
      nasabah.saldo_poin - poinTerpakai;

    // Simpan penukaran + kurangi saldo + stok
    return this.prisma.$transaction(async (tx) => {
      const penukaran = await tx.penukaran.create({
        data: {
          kategoriId: createPenukaranDto.kategoriId,
          hadiahId: hadiah.id,
          poin_terpakai: poinTerpakai,
          sisa_point: sisaPoint,
          tanggal: new Date(),
          status: 'PENDING',
        },
        include: {
          hadiah: true,
          kategori: true,
        },
      });

      await tx.nasabah.update({
        where: {
          id: nasabah.id,
        },
        data: {
          saldo_poin: sisaPoint,
        },
      });

      await tx.hadiah.update({
        where: {
          id: hadiah.id,
        },
        data: {
          stock: {
            decrement: 1,
          },
        },
      });

      return penukaran;
    });
  }

  findAll() {
    return this.prisma.penukaran.findMany({
      include: {
        kategori: true,
        hadiah: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.penukaran.findUnique({
      where: { id },
      include: {
        kategori: true,
        hadiah: true,
      },
    });
  }

  async update(
    id: number,
    updatePenukaranDto: UpdatePenukaranDto,
  ) {
    return this.prisma.penukaran.update({
      where: { id },
      data: {
        ...(updatePenukaranDto.status !== undefined && {
          status: updatePenukaranDto.status,
        }),
      },
    });
  }

  remove(id: number) {
    return this.prisma.penukaran.delete({
      where: { id },
    });
  }
}