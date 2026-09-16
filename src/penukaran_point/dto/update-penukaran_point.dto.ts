import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';

import { CreatePenukaranDto } from './create-penukaran_point.dto';
import { STATUS } from '@prisma/client';

export class UpdatePenukaranDto extends PartialType(
  CreatePenukaranDto,
) {
  @ApiProperty({
    enum: STATUS,
    example: STATUS.APPROVED,
  })
  @IsEnum(STATUS)
  @IsOptional()
  status?: STATUS;
}