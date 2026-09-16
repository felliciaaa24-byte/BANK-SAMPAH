import { Module } from '@nestjs/common';

import { NasabahController } from './nasabah.controller';
import { NasabahService } from './nasabah.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NasabahController],
  providers: [NasabahService],
})
export class NasabahModule {}