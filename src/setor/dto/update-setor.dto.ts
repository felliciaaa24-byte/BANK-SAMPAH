import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';

import { CreateSetoranDto } from './create-setor.dto';
import { STATUS } from '@prisma/client';

export class UpdateSetoranDto extends PartialType(CreateSetoranDto) {
  @ApiProperty({
    enum: STATUS,
    example: STATUS.APPROVED,
  })
  @IsEnum(STATUS)
  @IsOptional()
  status?: STATUS;
}