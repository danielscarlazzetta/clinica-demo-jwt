import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { v4 as uuid} from 'uuid';

@Injectable()
export class UsuarioService {

  private usuarios : Usuario[] = [
    {
      id : uuid(),
      username: 'usuario1',
      email: 'a@a.a',
      phone: '12345678',
      createdAt: new Date().getTime(),
    },
    {
      id : uuid(),
      username: 'usuario2',
      email: 'b@b.b',
      phone: '23456781',
      createdAt: new Date().getTime(),
    },
    {
      id : uuid(),
      username: 'usuario3',
      email: 'c@c.c',
      phone: '34567812',
      createdAt: new Date().getTime(),
    },
  ]
  create(createUsuarioDto: CreateUsuarioDto) {
    const createUsuario : Usuario = {
      id: uuid(),
      createdAt : new Date().getTime(),
      ...createUsuarioDto
    }
    this.usuarios.push(createUsuario);
    return createUsuario;
  }

  findAll() {
    return this.usuarios;
  }

  findOne(id: string) {
    const usuario = this.usuarios.find(usu => usu.id === id);
    if(!usuario) throw new NotFoundException({msg: `El ID: '${id}' que buscas no existe`});
    return usuario;
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    let usuarioDB = this.findOne(id);
    this.usuarios = this.usuarios.map( usu => {
      if(usu.id === id){
        usuarioDB.updatedAt = new Date().getTime();
        usuarioDB = {
          ...usuarioDB,
          ...updateUsuarioDto
        }
        return usuarioDB;
      }
      return usu;
    });
    return usuarioDB;
  }

  remove(id: string) {
   this.usuarios = this.usuarios.filter(usu => usu.id !==id )
  }
}
