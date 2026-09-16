import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { CreatePenukaranDto } from './dto/create-penukaran_point.dto';
import { UpdatePenukaranDto } from './dto/update-penukaran_point.dto';

@Injectable()
export class PenukaranService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPenukaranDto: CreatePenukaranDto) {
    return this.prisma.penukaran.create({
      data: {
        kategoriId: createPenukaranDto.kategoriId,
        hadiahId: createPenukaranDto.hadiahId,
        poin_terpakai: createPenukaranDto.poin_terpakai,
        sisa_point: createPenukaranDto.sisa_point,
        tanggal: new Date(createPenukaranDto.tanggal),
      },
    });
  }

  findAll() {
    return this.prisma.penukaran.findMany({
      include: {
        kategori: true,
        hadiah: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.penukaran.findUnique({
      where: { id },
      include: {
        kategori: true,
        hadiah: true,
      },
    });
  }

  update(
    id: number,
    updatePenukaranDto: UpdatePenukaranDto,
  ) {
    return this.prisma.penukaran.update({
      where: { id },
      data: {
        ...(updatePenukaranDto.kategoriId !== undefined && {
          kategoriId: updatePenukaranDto.kategoriId,
        }),

        ...(updatePenukaranDto.hadiahId !== undefined && {
          hadiahId: updatePenukaranDto.hadiahId,
        }),

        ...(updatePenukaranDto.poin_terpakai !== undefined && {
          poin_terpakai: updatePenukaranDto.poin_terpakai,
        }),

        ...(updatePenukaranDto.sisa_point !== undefined && {
          sisa_point: updatePenukaranDto.sisa_point,
        }),

        ...(updatePenukaranDto.tanggal !== undefined && {
          tanggal: new Date(updatePenukaranDto.tanggal),
        }),

        ...(updatePenukaranDto.status !== undefined && {
          status: updatePenukaranDto.status,
        }),
      },
    });
  }

  remove(id: number) {
    return this.prisma.penukaran.delete({
      where: { id },
    });
  }
}