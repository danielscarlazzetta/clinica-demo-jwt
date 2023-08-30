// import { PartialType } from '@nestjs/mapped-types';
// import { CreateUsuarioDto } from './create-usuario.dto';
// export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {}

import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";


export class UpdateUsuarioDto {
    @IsString()
    @MinLength(3, {message: `El minimo es de 1 caracter`})
    @IsNotEmpty()
    @IsOptional()
    username ?: string;

    @IsEmail()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(50)
    @IsOptional()
    email ?:string;

    @IsString()
    @MinLength(8)
    @MaxLength(8)
    @IsNotEmpty()
    @IsOptional()
    phone ?: string;
}


