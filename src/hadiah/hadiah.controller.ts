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

import { HadiahService } from './hadiah.service';
import { CreateHadiahDto } from './dto/create-hadiah.dto';
import { UpdateHadiahDto } from './dto/update-hadiah.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common';

@ApiTags('Hadiah')
@Controller('hadiah')
export class HadiahController {
  constructor(
    private readonly hadiahService: HadiahService,
  ) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('PEMILIK')
  create(@Body() createHadiahDto: CreateHadiahDto) {
    return this.hadiahService.create(createHadiahDto);
  }

  @Get()
  findAll() {
    return this.hadiahService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hadiahService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('PEMILIK')
  update(
    @Param('id') id: string,
    @Body() updateHadiahDto: UpdateHadiahDto,
  ) {
    return this.hadiahService.update(
      +id,
      updateHadiahDto,
    );
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('PEMILIK')
  remove(@Param('id') id: string) {
    return this.hadiahService.remove(+id);
  }
}