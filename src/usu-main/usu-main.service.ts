import { Injectable } from '@nestjs/common';
import { CreateUsuMainDto } from './dto/create-usu-main.dto';
import { UpdateUsuMainDto } from './dto/update-usu-main.dto';

@Injectable()
export class UsuMainService {
  create(createUsuMainDto: CreateUsuMainDto) {
    return 'This action adds a new usuMain';
  }

  findAll() {
    return `This action returns all usuMain`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuMain`;
  }

  update(id: number, updateUsuMainDto: UpdateUsuMainDto) {
    return `This action updates a #${id} usuMain`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuMain`;
  }
}
