import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { CreateSetoranDto } from './dto/create-setor.dto';
import { UpdateSetoranDto } from './dto/update-setor.dto';

@Injectable()
export class SetoranService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSetoranDto: CreateSetoranDto) {
    return this.prisma.setoran.create({
      data: {
        nasabahId: createSetoranDto.nasabahId,
        adminId: createSetoranDto.adminId,
        userId: createSetoranDto.userId,
        jumlah: createSetoranDto.jumlah,
        tanggal: new Date(createSetoranDto.tanggal),
      },
    });
  }

  findAll() {
    return this.prisma.setoran.findMany({
      include: {
        nasabah: true,
        admin: true,
        user: true,
        detailSetoran: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.setoran.findUnique({
      where: { id },
      include: {
        nasabah: true,
        admin: true,
        user: true,
        detailSetoran: true,
      },
    });
  }

  update(id: number, updateSetoranDto: UpdateSetoranDto) {
    return this.prisma.setoran.update({
      where: { id },
      data: {
        ...(updateSetoranDto.nasabahId !== undefined && {
          nasabahId: updateSetoranDto.nasabahId,
        }),

        ...(updateSetoranDto.adminId !== undefined && {
          adminId: updateSetoranDto.adminId,
        }),

        ...(updateSetoranDto.userId !== undefined && {
          userId: updateSetoranDto.userId,
        }),

        ...(updateSetoranDto.jumlah !== undefined && {
          jumlah: updateSetoranDto.jumlah,
        }),

        ...(updateSetoranDto.tanggal !== undefined && {
          tanggal: new Date(updateSetoranDto.tanggal),
        }),
      },
    });
  }

  remove(id: number) {
    return this.prisma.setoran.delete({
      where: { id },
    });
  }
}