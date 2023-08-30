import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    @MinLength(3, {message: `El minimo es de 1 caracter`})
    @IsNotEmpty()
    username : string;

    @IsEmail()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    email : string;

    @IsString()
    @MinLength(3)
    @MaxLength(8)
    @IsNotEmpty()
    phone : string;
}
