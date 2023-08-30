import { Module } from '@nestjs/common';
import { UsuCliService } from './usu-cli.service';
import { UsuCliController } from './usu-cli.controller';

@Module({
  controllers: [UsuCliController],
  providers: [UsuCliService],
})
export class UsuCliModule {}
