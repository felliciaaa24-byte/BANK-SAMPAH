import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { CreateHadiahDto } from './dto/create-hadiah.dto';
import { UpdateHadiahDto } from './dto/update-hadiah.dto';

@Injectable()
export class HadiahService {
  constructor(private readonly prisma: PrismaService) {}

  create(createHadiahDto: CreateHadiahDto) {
    return this.prisma.hadiah.create({
      data: createHadiahDto,
    });
  }

  findAll() {
    return this.prisma.hadiah.findMany({
      include: {
        penukaran: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.hadiah.findUnique({
      where: { id },
      include: {
        penukaran: true,
      },
    });
  }

  update(id: number, updateHadiahDto: UpdateHadiahDto) {
    return this.prisma.hadiah.update({
      where: { id },
      data: updateHadiahDto,
    });
  }

  remove(id: number) {
    return this.prisma.hadiah.delete({
      where: { id },
    });
  }
}