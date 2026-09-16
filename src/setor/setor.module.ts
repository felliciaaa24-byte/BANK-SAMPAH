import { Module } from '@nestjs/common';

import { SetoranController } from './setor.controller';
import { SetoranService } from './setor.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SetoranController],
  providers: [SetoranService],
})
export class SetoranModule {}