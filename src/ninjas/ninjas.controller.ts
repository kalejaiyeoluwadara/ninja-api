import { Controller, Get, Param, Post } from '@nestjs/common';
import { Body } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {

    @Get()
    getNinjas() {
        return [];
    }

    @Get(':id')
    getNinja(@Param('id') id: string) {
        return `getNinja ${id}`;
    }

  
}
