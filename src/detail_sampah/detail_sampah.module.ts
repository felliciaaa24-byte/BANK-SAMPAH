import { Module } from '@nestjs/common';

import { DetailSetoranController } from './detail_sampah.controller';
import { DetailSetoranService } from './detail_sampah.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DetailSetoranController],
  providers: [DetailSetoranService],
})
export class DetailSetoranModule {}