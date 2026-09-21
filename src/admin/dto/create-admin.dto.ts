import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateAdminDto {
  @ApiProperty({ example: 'Unit Bank Sampah Malang' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nama_unit!: string;

  @ApiProperty({ example: 'Felicia' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nama_pengelola!: string;

  @ApiProperty({ example: '081234567890' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  telpon!: string;


}