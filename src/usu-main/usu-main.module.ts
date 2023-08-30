import { Module } from '@nestjs/common';
import { UsuMainService } from './usu-main.service';
import { UsuMainController } from './usu-main.controller';

@Module({
  controllers: [UsuMainController],
  providers: [UsuMainService],
})
export class UsuMainModule {}
