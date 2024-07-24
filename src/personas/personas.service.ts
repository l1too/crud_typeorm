import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './entities/persona.entity';

@Injectable()
export class PersonasService {
 
      constructor(
      @InjectRepository(Persona) 
      private readonly personaRepository: Repository<Persona>
    ) {}

  create(createPersonaDto: CreatePersonaDto):Promise<Persona> {
    return this.personaRepository.save(createPersonaDto);
  }

  findAll() {
    return this.personaRepository.find({
      relations: {auto:true, role:true}
    }) ;
  }

  findOne(id: number) {
    return this.personaRepository.findOne({
      where: {id}
    });
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {

    return this.personaRepository.update(id, updatePersonaDto);
  }

  remove(id: number) {
    return this.personaRepository.delete(id);
  }
}
