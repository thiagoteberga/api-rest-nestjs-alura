import { Module } from '@nestjs/common';
import { isNomeDeUsuarioUnicoConstraint } from './is-nome-de-usuario-unico.validator';
import { usuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
  controllers: [usuarioController],
  providers: [UsuarioService,
              isNomeDeUsuarioUnicoConstraint],
})
export class usuarioModule {}
