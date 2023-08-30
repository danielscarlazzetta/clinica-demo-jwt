import { Injectable } from '@nestjs/common';
import { CreateUsuCliDto } from './dto/create-usu-cli.dto';
import { UpdateUsuCliDto } from './dto/update-usu-cli.dto';

@Injectable()
export class UsuCliService {
  create(createUsuCliDto: CreateUsuCliDto) {
    return 'This action adds a new usuCli';
  }

  findAll() {
    return `This action returns all usuCli`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuCli`;
  }

  update(id: number, updateUsuCliDto: UpdateUsuCliDto) {
    return `This action updates a #${id} usuCli`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuCli`;
  }
}
