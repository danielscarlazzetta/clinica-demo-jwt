import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuMainService } from './usu-main.service';
import { CreateUsuMainDto } from './dto/create-usu-main.dto';
import { UpdateUsuMainDto } from './dto/update-usu-main.dto';

@Controller('usu-main')
export class UsuMainController {
  constructor(private readonly usuMainService: UsuMainService) {}

  @Post()
  create(@Body() createUsuMainDto: CreateUsuMainDto) {
    return this.usuMainService.create(createUsuMainDto);
  }

  @Get()
  findAll() {
    return this.usuMainService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuMainService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuMainDto: UpdateUsuMainDto) {
    return this.usuMainService.update(+id, updateUsuMainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuMainService.remove(+id);
  }
}
