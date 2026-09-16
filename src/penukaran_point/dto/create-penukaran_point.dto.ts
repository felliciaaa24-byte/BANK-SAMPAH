import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class CreatePenukaranDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  kategoriId!: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  hadiahId!: number;

  @ApiProperty({ example: 500 })
  @IsNumber()
  @IsNotEmpty()
  poin_terpakai!: number;

  @ApiProperty({ example: 500 })
  @IsNumber()
  @IsNotEmpty()
  sisa_point!: number;

  @ApiProperty({ example: '2026-09-15' })
  @IsDateString()
  @IsNotEmpty()
  tanggal!: string;
}