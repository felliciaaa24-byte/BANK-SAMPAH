import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { NotFoundException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateAdminDto,  userId: number) {
    return this.prisma.admin.create({
      data: {
        nama_unit : dto.nama_unit,
        nama_pengelola : dto.nama_pengelola,
        telpon : dto.telpon,
        userId: userId,
      },
    });
  }

  findAll() {
    return this.prisma.admin.findMany({
      include: {
        user: true,
        setoran: true,
      },
    });
  }

  findPending() {
    return this.prisma.admin.findMany({
      where: {
        status: 'PENDING',
      },
      include: {
        user: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.admin.findUnique({
      where: { id },
      include: {
        user: true,
        setoran: true,
      },
    });
  }

  async approve(id: number) {
  const admin = await this.prisma.admin.findUnique({
    where: { id },
  });

  if (!admin) {
    throw new NotFoundException('Pengajuan admin tidak ditemukan');
  }

  if (admin.status !== 'PENDING') {
    throw new BadRequestException(
      'Pengajuan ini sudah diproses',
    );
  }

  return this.prisma.$transaction(async (tx) => {
    const updatedAdmin = await tx.admin.update({
      where: { id },
      data: {
        status: 'APPROVED',
      },
    });

    await tx.user.update({
      where: { id: admin.userId },
      data: {
        role: 'ADMIN',
      },
    });

    return updatedAdmin;
  });
}

   async reject(id: number) {
    return this.prisma.admin.update({
      where: { id },
      data: {
        status: 'REJECTED',
      },
    });
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.prisma.admin.update({
      where: { id },
      data: updateAdminDto,
    });
  }

  remove(id: number) {
    return this.prisma.admin.delete({
      where: { id },
    });
  }
}