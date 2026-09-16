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

@ApiTags('Hadiah')
@Controller('hadiah')
export class HadiahController {
  constructor(
    private readonly hadiahService: HadiahService,
  ) {}

  @Post()
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
  remove(@Param('id') id: string) {
    return this.hadiahService.remove(+id);
  }
}