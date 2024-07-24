import { Injectable } from '@nestjs/common';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { Auto } from './entities/auto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AutosService {
  constructor(
    @InjectRepository(Auto) 
    private readonly autoRepository: Repository<Auto>
  ) {}

create(createAutoDto: CreateAutoDto):Promise<Auto> {
  return this.autoRepository.save(createAutoDto);
}

findAll() {
  return this.autoRepository.find({
    relations: {
      persona:true
    }
  }) ;
}

findOne(id: number) {
  return this.autoRepository.findOne({
    where: {id}
  });
}

update(id: number, updateAutoDto: UpdateAutoDto) {

  return this.autoRepository.update(id, updateAutoDto);
}

remove(id: number) {
  return this.autoRepository.delete(id);
}
}
