import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';


export class CreateHadiahDto {
  @ApiProperty({ example: 'Voucher Belanja Rp50.000' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nama_hadiah!: string;

  @ApiProperty({ example: 500 })
  @IsNumber()
  @IsNotEmpty()
  poin_dibutuhkan!: number;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @IsNotEmpty()
  stock!: number;

  @ApiProperty({ example: 'voucher.jpg' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  foto!: string;
}
