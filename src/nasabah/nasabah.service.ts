import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNasabahDto } from './dto/create-nasabah.dto';
import { UpdateNasabahDto } from './dto/update-nasabah.dto';

@Injectable()
export class NasabahService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateNasabahDto, userId: number) {
  return this.prisma.nasabah.create({
    data: {
      nama_nasabah: dto.nama_nasabah,
      alamat: dto.alamat,
      telepon: dto.telepon,
      foto: dto.foto,
      saldo_poin: 0,
      userId: userId,
    },
  });
}

  findAll() {
    return this.prisma.nasabah.findMany({
      include: {
        user: true,
        setoran: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.nasabah.findUnique({
      where: { id },
      include: {
        user: true,
        setoran: true,
      },
    });
  }

  async update(id: number, dto: UpdateNasabahDto) {
  return this.prisma.nasabah.update({
    where: { id },
    data: {
      nama_nasabah: dto.nama_nasabah,
      alamat: dto.alamat,
      telepon: dto.telepon,
      foto: dto.foto,
    },
  });
}

  remove(id: number) {
    return this.prisma.nasabah.delete({
      where: { id },
    });
  }
}