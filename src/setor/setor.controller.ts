import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  Req,
  ParseIntPipe,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

import { SetoranService } from './setor.service';
import { CreateSetoranDto } from './dto/create-setor.dto';
import { UpdateSetoranDto } from './dto/update-setor.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Setoran')
@Controller('setoran')
export class SetoranController {
  constructor(
    private readonly setoranService: SetoranService,
  ) { }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('NASABAH')
  create(
    @Body() createSetoranDto: CreateSetoranDto,
    @Req() req: any,
  ) {
    return this.setoranService.create(
      createSetoranDto,
      req.user.id,
    );
  }

  @Get('pengajuan')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  findPengajuan(@Req() req: any) {
    return this.setoranService.findPengajuanByAdmin(req.user.id);
  }
  @Patch(':id/approve')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  approve(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: any,
  ) {
    return this.setoranService.approve(id, req.user.id);
  }

  @Patch(':id/reject')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  reject(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: any,
  ) {
    return this.setoranService.reject(id, req.user.id);
  }
}
