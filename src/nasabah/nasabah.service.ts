import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNasabahDto } from './dto/create-nasabah.dto';
import { UpdateNasabahDto } from './dto/update-nasabah.dto';

@Injectable()
export class NasabahService {
  constructor(private readonly prisma: PrismaService) {}

  create(createNasabahDto: CreateNasabahDto) {
    return this.prisma.nasabah.create({
      data: createNasabahDto,
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

  update(id: number, updateNasabahDto: UpdateNasabahDto) {
    return this.prisma.nasabah.update({
      where: { id },
      data: updateNasabahDto,
    });
  }

  remove(id: number) {
    return this.prisma.nasabah.delete({
      where: { id },
    });
  }
}