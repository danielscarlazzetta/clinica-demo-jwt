import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuCliService } from './usu-cli.service';
import { CreateUsuCliDto } from './dto/create-usu-cli.dto';
import { UpdateUsuCliDto } from './dto/update-usu-cli.dto';

@Controller('usu-cli')
export class UsuCliController {
  constructor(private readonly usuCliService: UsuCliService) {}

  @Post()
  create(@Body() createUsuCliDto: CreateUsuCliDto) {
    return this.usuCliService.create(createUsuCliDto);
  }

  @Get()
  findAll() {
    return this.usuCliService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuCliService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuCliDto: UpdateUsuCliDto) {
    return this.usuCliService.update(+id, updateUsuCliDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuCliService.remove(+id);
  }
}
