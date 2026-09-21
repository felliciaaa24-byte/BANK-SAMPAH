import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { CreateSetoranDto } from './dto/create-setor.dto';
import { UpdateSetoranDto } from './dto/update-setor.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class SetoranService {
  constructor(private readonly prisma: PrismaService) {}

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
}