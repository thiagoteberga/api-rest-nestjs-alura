import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class Usuario {
    id: number;

    @IsNotEmpty({
        message: 'nomeDeUsuario é obrigatório'
    })
    @IsString({
        message: 'nomeDeUsuario precisa ser uma string.'
    })
    nomeDeUsuario: string;

    @IsEmail({}, {
        message: 'email precisa ser um endereço de email válido.'
    })
    email: string;

    @IsNotEmpty({
        message: 'Campo senha é obrigatório'
    })
    senha: string;

    @IsNotEmpty({
        message: 'nomeCompleto é obrigatório'
    })
    nomeCompleto: string;
    dataDeEntrada: Date;
}