import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { NasabahModule } from './nasabah/nasabah.module';
import { AdminModule } from './admin/admin.module';
import { SetoranModule } from './setor/setor.module';
import { KategoriModule } from './kategori/kategori.module';
import { DetailSetoranModule } from './detail_sampah/detail_sampah.module';
import { HadiahModule } from './hadiah/hadiah.module';
import { PenukaranModule } from './penukaran_point/penukaran_point.module';

@Module({
  imports: [
     PrismaModule,
    AuthModule,
    NasabahModule,
    AdminModule,
    SetoranModule,
    KategoriModule,
    DetailSetoranModule,
    HadiahModule,
    PenukaranModule,
  ],
})
export class AppModule {}