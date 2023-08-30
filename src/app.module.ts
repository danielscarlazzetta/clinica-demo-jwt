import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuMainModule } from './usu-main/usu-main.module';
import { UsuEmpModule } from './usu-emp/usu-emp.module';
import { UsuCliModule } from './usu-cli/usu-cli.module';

@Module({
  imports: [UsuarioModule, UsuMainModule, UsuEmpModule, UsuCliModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
