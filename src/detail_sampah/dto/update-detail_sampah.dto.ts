import { PartialType } from '@nestjs/swagger';
import { CreateDetailSetoranDto } from './create-detail_sampah.dto';

export class UpdateDetailSetoranDto extends PartialType(
  CreateDetailSetoranDto,
) {}