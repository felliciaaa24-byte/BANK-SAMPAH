import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class CreateDetailSetoranDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  setoranId!: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  kategoriId!: number;

  @ApiProperty({ example: 2.5 })
  @IsNumber()
  @IsNotEmpty()
  berat_kg!: number;

}