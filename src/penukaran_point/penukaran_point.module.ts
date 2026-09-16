import { Module } from '@nestjs/common';

import { PenukaranController } from './penukaran_point.controller';
import { PenukaranService } from './penukaran_point.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PenukaranController],
  providers: [PenukaranService],
})
export class PenukaranModule {}