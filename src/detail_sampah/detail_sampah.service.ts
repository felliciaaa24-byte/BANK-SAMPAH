import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { CreateDetailSetoranDto } from './dto/create-detail_sampah.dto';
import { UpdateDetailSetoranDto } from './dto/update-detail_sampah.dto';

@Injectable()
export class DetailSetoranService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDetailSetoranDto: CreateDetailSetoranDto) {
    return this.prisma.detailSetoran.create({
      data: createDetailSetoranDto,
    });
  }

  findAll() {
    return this.prisma.detailSetoran.findMany({
      include: {
        setoran: true,
        kategori: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.detailSetoran.findUnique({
      where: { id },
      include: {
        setoran: true,
        kategori: true,
      },
    });
  }

  update(
    id: number,
    updateDetailSetoranDto: UpdateDetailSetoranDto,
  ) {
    return this.prisma.detailSetoran.update({
      where: { id },
      data: updateDetailSetoranDto,
    });
  }

  remove(id: number) {
    return this.prisma.detailSetoran.delete({
      where: { id },
    });
  }
}