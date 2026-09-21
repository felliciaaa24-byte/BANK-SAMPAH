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
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common';

@ApiTags('Detail Setoran')
@Controller('detail-setoran')
export class DetailSetoranController {
  constructor(
    private readonly detailSetoranService: DetailSetoranService,
  ) { }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('NASABAH')
  create(@Body() createDetailSetoranDto: CreateDetailSetoranDto) {
    return this.detailSetoranService.create(
      createDetailSetoranDto,
    );
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  findAll() {
    return this.detailSetoranService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  findOne(@Param('id') id: string) {
    return this.detailSetoranService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('NASABAH')
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
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('NASABAH')
  remove(@Param('id') id: string) {
    return this.detailSetoranService.remove(+id);
  }
}