import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

import { PenukaranService } from './penukaran_point.service';
import { CreatePenukaranDto } from './dto/create-penukaran_point.dto';
import { UpdatePenukaranDto } from './dto/update-penukaran_point.dto';

@ApiTags('Penukaran')
@Controller('penukaran')
export class PenukaranController {
  constructor(
    private readonly penukaranService: PenukaranService,
  ) {}

  @Post()
  create(@Body() createPenukaranDto: CreatePenukaranDto) {
    return this.penukaranService.create(
      createPenukaranDto,
    );
  }

  @Get()
  findAll() {
    return this.penukaranService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.penukaranService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePenukaranDto: UpdatePenukaranDto,
  ) {
    return this.penukaranService.update(
      +id,
      updatePenukaranDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.penukaranService.remove(+id);
  }
}