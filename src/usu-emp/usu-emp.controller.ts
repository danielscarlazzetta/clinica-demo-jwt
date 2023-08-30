import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuEmpService } from './usu-emp.service';
import { CreateUsuEmpDto } from './dto/create-usu-emp.dto';
import { UpdateUsuEmpDto } from './dto/update-usu-emp.dto';

@Controller('usu-emp')
export class UsuEmpController {
  constructor(private readonly usuEmpService: UsuEmpService) {}

  @Post()
  create(@Body() createUsuEmpDto: CreateUsuEmpDto) {
    return this.usuEmpService.create(createUsuEmpDto);
  }

  @Get()
  findAll() {
    return this.usuEmpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuEmpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuEmpDto: UpdateUsuEmpDto) {
    return this.usuEmpService.update(+id, updateUsuEmpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuEmpService.remove(+id);
  }
}
