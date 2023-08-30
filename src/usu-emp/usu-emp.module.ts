import { Module } from '@nestjs/common';
import { UsuEmpService } from './usu-emp.service';
import { UsuEmpController } from './usu-emp.controller';

@Module({
  controllers: [UsuEmpController],
  providers: [UsuEmpService],
})
export class UsuEmpModule {}
