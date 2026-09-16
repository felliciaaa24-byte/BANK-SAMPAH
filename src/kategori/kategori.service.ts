import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { CreateKategoriDto } from './dto/create-kategori.dto';
import { UpdateKategoriDto } from './dto/update-kategori.dto';

@Injectable()
export class KategoriService {
  constructor(private readonly prisma: PrismaService) {}

  create(createKategoriDto: CreateKategoriDto) {
    return this.prisma.kategori.create({
      data: createKategoriDto,
    });
  }

  findAll() {
    return this.prisma.kategori.findMany({
      include: {
        detailSetoran: true,
        penukaran: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.kategori.findUnique({
      where: { id },
      include: {
        detailSetoran: true,
        penukaran: true,
      },
    });
  }

  update(id: number, updateKategoriDto: UpdateKategoriDto) {
    return this.prisma.kategori.update({
      where: { id },
      data: updateKategoriDto,
    });
  }

  remove(id: number) {
    return this.prisma.kategori.delete({
      where: { id },
    });
  }
}