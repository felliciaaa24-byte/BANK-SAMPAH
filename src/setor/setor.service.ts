import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { CreateSetoranDto } from './dto/create-setor.dto';
import { UpdateSetoranDto } from './dto/update-setor.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class SetoranService {
  constructor(private readonly prisma: PrismaService) { }

  async create(dto: CreateSetoranDto, userId: number) {
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

    // Pastikan lokasi/unit yang dipilih memang ada
    const admin = await this.prisma.admin.findUnique({
      where: {
        id: dto.adminId,
      },
    });

    if (!admin) {
      throw new NotFoundException(
        'Lokasi penyetoran tidak ditemukan',
      );
    }

    // Buat setoran
    return this.prisma.setoran.create({
      data: {
        nasabahId: nasabah.id,
        adminId: dto.adminId,
        userId: userId,
        jumlah: 0,
        tanggal: new Date(dto.tanggal),
        status: 'PENDING',
      },
      include: {
        nasabah: true,
        admin: true,
        detailSetoran: true,
      },
    });
  }

  async findPengajuanByAdmin(userId: number) {
  const admin = await this.prisma.admin.findUnique({
    where: {
      userId: userId,
    },
  });

  if (!admin) {
    throw new NotFoundException(
      'Anda bukan admin dari unit manapun',
    );
  }

  return this.prisma.setoran.findMany({
    where: {
      adminId: admin.id,
      status: 'PENDING',
    },
    include: {
      nasabah: true,
      detailSetoran: {
        include: {
          kategori: true,
        },
      },
    },
    orderBy: {
      tanggal: 'desc',
    },
  });
}

async reject(setoranId: number, userId: number) {
  const admin = await this.prisma.admin.findUnique({
    where: {
      userId: userId,
    },
  });

  if (!admin) {
    throw new NotFoundException(
      'Anda bukan admin dari unit manapun',
    );
  }

  const setoran = await this.prisma.setoran.findUnique({
    where: {
      id: setoranId,
    },
  });

  if (!setoran) {
    throw new NotFoundException(
      'Setoran tidak ditemukan',
    );
  }

  if (setoran.adminId !== admin.id) {
    throw new ForbiddenException(
      'Anda tidak memiliki akses ke setoran ini',
    );
  }

  if (setoran.status !== 'PENDING') {
    throw new BadRequestException(
      'Setoran ini sudah diproses',
    );
  }

  return this.prisma.setoran.update({
    where: {
      id: setoranId,
    },
    data: {
      status: 'REJECTED',
    },
    include: {
      nasabah: true,
      admin: true,
      detailSetoran: {
        include: {
          kategori: true,
        },
      },
    },
  });
}

  async approve(setoranId: number, userId: number) {
  const admin = await this.prisma.admin.findUnique({
    where: {
      userId: userId,
    },
  });

  if (!admin) {
    throw new NotFoundException(
      'Anda bukan admin dari unit manapun',
    );
  }

  const setoran = await this.prisma.setoran.findUnique({
    where: {
      id: setoranId,
    },
    include: {
      detailSetoran: true,
    },
  });

  if (!setoran) {
    throw new NotFoundException(
      'Setoran tidak ditemukan',
    );
  }

  // Pastikan setoran memang milik unit admin yang login
  if (setoran.adminId !== admin.id) {
    throw new ForbiddenException(
      'Anda tidak memiliki akses ke setoran ini',
    );
  }

  if (setoran.status !== 'PENDING') {
    throw new BadRequestException(
      'Setoran ini sudah diproses',
    );
  }

  // Hitung total berat
  const jumlah = setoran.detailSetoran.reduce(
    (total, detail) => total + detail.berat_kg,
    0,
  );

  // Hitung total poin
  const totalPoin = setoran.detailSetoran.reduce(
    (total, detail) => total + detail.sub_totalPoint,
    0,
  );

  return this.prisma.$transaction(async (tx) => {
    const updatedSetoran = await tx.setoran.update({
      where: {
        id: setoranId,
      },
      data: {
        status: 'APPROVED',
        jumlah: jumlah,
      },
      include: {
        nasabah: true,
        admin: true,
        detailSetoran: {
          include: {
            kategori: true,
          },
        },
      },
    });

    // Tambahkan poin ke saldo nasabah
    await tx.nasabah.update({
      where: {
        id: setoran.nasabahId,
      },
      data: {
        saldo_poin: {
          increment: totalPoin,
        },
      },
    });

    return updatedSetoran;
  });
}
}

