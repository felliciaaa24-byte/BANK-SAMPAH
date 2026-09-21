import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class CreateSetoranDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  adminId!: number;

  @ApiProperty({
    example: '2026-09-15',
  })
  @IsDateString()
  @IsNotEmpty()
  tanggal!: string;
}