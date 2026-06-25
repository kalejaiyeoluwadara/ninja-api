import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
    private ninjas = [
        { id: 0, name: 'Ninja A', weapon: 'stars' },
        { id: 1, name: 'Ninja B', weapon: 'nunchucks' },
        { id: 2, name: 'Ninja C', weapon: 'stars' },
    ];
    getAllNinjas( weapon?: 'stars' | 'nunchucks' ) {
        if (weapon) {
            return this.ninjas.filter((ninja) => ninja.weapon === weapon);
        }
        return this.ninjas;
    }   

    getNinjaById(id: number) {
        const ninja = this.ninjas.find((ninja) => ninja.id === id);
        if (!ninja) throw new NotFoundException('Ninja not found');
        return ninja;
    }

    updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
        const ninja = this.getNinjaById(id);
        ninja.name = updateNinjaDto.name ?? ninja.name;
        ninja.weapon = updateNinjaDto.weapon ?? ninja.weapon;
        return ninja;
    }

    deleteNinja(id: number) {
        const index = this.ninjas.findIndex((ninja) => ninja.id === id);
        if (index === -1) throw new NotFoundException('Ninja not found');
        this.ninjas.splice(index, 1);
        return { message: 'Ninja deleted successfully' };
    }

    createNinja(createNinjaDto: CreateNinjaDto) {
        const newNinja = { id: this.ninjas.length, name: createNinjaDto.name, weapon: createNinjaDto.weapon };
        this.ninjas.push(newNinja);
        return newNinja;
    }
}
