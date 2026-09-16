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

import { DetailSetoranService } from './detail_sampah.service';
import { CreateDetailSetoranDto } from './dto/create-detail_sampah.dto';
import { UpdateDetailSetoranDto } from './dto/update-detail_sampah.dto';

@ApiTags('Detail Setoran')
@Controller('detail-setoran')
export class DetailSetoranController {
  constructor(
    private readonly detailSetoranService: DetailSetoranService,
  ) {}

  @Post()
  create(@Body() createDetailSetoranDto: CreateDetailSetoranDto) {
    return this.detailSetoranService.create(
      createDetailSetoranDto,
    );
  }

  @Get()
  findAll() {
    return this.detailSetoranService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detailSetoranService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDetailSetoranDto: UpdateDetailSetoranDto,
  ) {
    return this.detailSetoranService.update(
      +id,
      updateDetailSetoranDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detailSetoranService.remove(+id);
  }
}