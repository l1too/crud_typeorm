import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {

  constructor(@InjectRepository(Role) private readonly rolRepository: Repository<Role> ){}

  create(createRoleDto: CreateRoleDto) {
    return this.rolRepository.save(createRoleDto);
  }

  findAll() {
    return this.rolRepository.find({

    });
  }

  findOne(id: number) {
    return this.rolRepository.findOne({
      where:{id}
    });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.rolRepository.update(id,updateRoleDto);
  }

  remove(id: number) {
    return this.rolRepository.delete(id);
  }
}
