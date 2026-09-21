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

import { KategoriService } from './kategori.service';
import { CreateKategoriDto } from './dto/create-kategori.dto';
import { UpdateKategoriDto } from './dto/update-kategori.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common';

@ApiTags('Kategori Sampah')
@Controller('kategori')
export class KategoriController {
  constructor(
    private readonly kategoriService: KategoriService,
  ) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('PEMILIK')
  create(@Body() createKategoriDto: CreateKategoriDto) {
    return this.kategoriService.create(createKategoriDto);
  }

  @Get()
  findAll() {
    return this.kategoriService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kategoriService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('PEMILIK')
  update(
    @Param('id') id: string,
    @Body() updateKategoriDto: UpdateKategoriDto,
  ) {
    return this.kategoriService.update(
      +id,
      updateKategoriDto,
    );
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('PEMILIK')
  remove(@Param('id') id: string) {
    return this.kategoriService.remove(+id);
  }
}