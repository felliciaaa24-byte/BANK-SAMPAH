import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

import { Jenis } from '@prisma/client';

export class CreateKategoriDto {
  @ApiProperty({ example: 'Botol Plastik' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nama_kategori!: string;

  @ApiProperty({ example: 5000 })
  @IsNumber()
  @IsNotEmpty()
  harga_perKilo!: number;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @IsNotEmpty()
  poin_perKilo!: number;

  @ApiProperty({
    enum: Jenis,
    example: Jenis.PLASTIK,
  })
  @IsEnum(Jenis)
  @IsNotEmpty()
  jenis_sampaj!: Jenis;

  @ApiProperty({ example: 'botol-plastik.jpg' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  foto!: string;
}