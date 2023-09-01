import { Module } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuMainModule } from './usu-main/usu-main.module';
import { UsuEmpModule } from './usu-emp/usu-emp.module';
import { UsuCliModule } from './usu-cli/usu-cli.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsuarioModule,
    UsuMainModule,
    UsuEmpModule,
    UsuCliModule,
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public')
  })],
  /*MongooseModule.forRoot(`mongodb://localhost:27018/nest-clinica`),*/
  controllers: [],
  providers: [],
})
export class AppModule {}
