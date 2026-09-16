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

import { SetoranService } from './setor.service';
import { CreateSetoranDto } from './dto/create-setor.dto';
import { UpdateSetoranDto } from './dto/update-setor.dto';

@ApiTags('Setoran')
@Controller('setoran')
export class SetoranController {
  constructor(
    private readonly setoranService: SetoranService,
  ) {}

  @Post()
  create(@Body() createSetoranDto: CreateSetoranDto) {
    return this.setoranService.create(createSetoranDto);
  }

  @Get()
  findAll() {
    return this.setoranService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.setoranService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSetoranDto: UpdateSetoranDto,
  ) {
    return this.setoranService.update(
      +id,
      updateSetoranDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.setoranService.remove(+id);
  }
}