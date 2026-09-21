import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

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

  findOne(id: number) {
    return this.prisma.admin.findUnique({
      where: { id },
      include: {
        user: true,
        setoran: true,
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