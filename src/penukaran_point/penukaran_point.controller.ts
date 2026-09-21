import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

import { PenukaranService } from './penukaran_point.service';
import { CreatePenukaranDto } from './dto/create-penukaran_point.dto';
import { UpdatePenukaranDto } from './dto/update-penukaran_point.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common';

@ApiTags('Penukaran')
@Controller('penukaran')
export class PenukaranController {
  constructor(
    private readonly penukaranService: PenukaranService,
  ) { }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('NASABAH')
  create(
    @Body() createPenukaranDto: CreatePenukaranDto,
    @Req() req: any,
  ) {
    return this.penukaranService.create(
      createPenukaranDto,
      req.user.id,
    );
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('NASABAH')
  findAll() {
    return this.penukaranService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.penukaranService.findOne(+id);
  }

  @Patch(':id')
  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('NASABAH')
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
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('NASABAH')
  remove(@Param('id') id: string) {
    return this.penukaranService.remove(+id);
  }
}