import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UbicacionesService } from './ubicaciones.service';
import { CreateUbicacioneDto } from './dto/create-ubicacione.dto';
import { UpdateUbicacioneDto } from './dto/update-ubicacione.dto';

@Controller('ubicaciones')
export class UbicacionesController {
  constructor(private readonly ubicacionesService: UbicacionesService) {}

  @Post()
  create(@Body() createUbicacioneDto: CreateUbicacioneDto) {
    return this.ubicacionesService.create(createUbicacioneDto);
  }

  @Get()
  findAll() {
    return this.ubicacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ubicacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUbicacioneDto: UpdateUbicacioneDto) {
    return this.ubicacionesService.update(+id, updateUbicacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ubicacionesService.remove(+id);
  }
}
