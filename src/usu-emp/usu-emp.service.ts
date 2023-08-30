import { Injectable } from '@nestjs/common';
import { CreateUsuEmpDto } from './dto/create-usu-emp.dto';
import { UpdateUsuEmpDto } from './dto/update-usu-emp.dto';

@Injectable()
export class UsuEmpService {
  create(createUsuEmpDto: CreateUsuEmpDto) {
    return 'This action adds a new usuEmp';
  }

  findAll() {
    return `This action returns all usuEmp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuEmp`;
  }

  update(id: number, updateUsuEmpDto: UpdateUsuEmpDto) {
    return `This action updates a #${id} usuEmp`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuEmp`;
  }
}
