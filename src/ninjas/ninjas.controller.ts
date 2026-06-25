import { Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {

    constructor(private readonly ninjasService: NinjasService) {}

    @Get()
    getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
        return this.ninjasService.getAllNinjas(weapon);
    }

    @Get(':id')
    getNinja(@Param('id') id: number) {
        return this.ninjasService.getNinjaById(id);
    }

    @Patch(':id')
    updateNinja(@Param('id') id: number, @Body() updateNinjaDto: UpdateNinjaDto) {
        return this.ninjasService.updateNinja(id, updateNinjaDto);
    }

    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto) {
        return this.ninjasService.createNinja(createNinjaDto);
    }

    @Delete(':id')
    deleteNinja(@Param('id') id: number) {
        return this.ninjasService.deleteNinja(id);
    }
  
}
