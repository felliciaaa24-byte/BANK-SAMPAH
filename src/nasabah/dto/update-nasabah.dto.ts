import { PartialType } from '@nestjs/swagger';
import { CreateNasabahDto } from './create-nasabah.dto';

export class UpdateNasabahDto extends PartialType(CreateNasabahDto) {}