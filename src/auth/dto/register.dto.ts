import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  Matches,
  MinLength,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class RegisterDto {
  @ApiProperty()
   @IsString()
  @IsNotEmpty()
  username!: string;

  @ApiProperty()
  @IsEmail()
  @Matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, {
    message: 'Email harus menggunakan @gmail.com',
  })
  email!: string;

  @ApiProperty()
  @MinLength(6)
  password!: string;
}