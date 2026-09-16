import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateNasabahDto {
  @ApiProperty({ example: 'Feli' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nama_nasabah!: string;

  @ApiProperty({ example: 'Jl. Contoh No. 123' })
  @IsString()
  @IsNotEmpty()
  alamat!: string;

  @ApiProperty({ example: '081234567890' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  telepon!: string;

  @ApiProperty({ example: 0 })
  @IsNumber()
  saldo_poin!: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  userId!: number;

  @ApiProperty({ example: 'foto.jpg' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  foto!: string;
}