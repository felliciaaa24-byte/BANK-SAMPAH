import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { CreateDetailSetoranDto } from './dto/create-detail_sampah.dto';
import { UpdateDetailSetoranDto } from './dto/update-detail_sampah.dto';
import { NotFoundException, BadRequestException,
  ForbiddenException, } from '@nestjs/common';

@Injectable()
export class DetailSetoranService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDetailSetoranDto: CreateDetailSetoranDto) {
  const kategori = await this.prisma.kategori.findUnique({
    where: {
      id: createDetailSetoranDto.kategoriId,
    },
  });

  if (!kategori) {
    throw new NotFoundException('Kategori sampah tidak ditemukan');
  }

  const subTotalPoint =
    kategori.poin_perKilo * createDetailSetoranDto.berat_kg;

  return this.prisma.detailSetoran.create({
    data: {
      setoranId: createDetailSetoranDto.setoranId,
      kategoriId: createDetailSetoranDto.kategoriId,
      berat_kg: createDetailSetoranDto.berat_kg,
      sub_totalPoint: subTotalPoint,
    },
    include: {
      kategori: true,
      setoran: true,
    },
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