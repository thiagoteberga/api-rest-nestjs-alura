import { Module } from '@nestjs/common';
import { usuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
  controllers: [usuarioController],
  providers: [UsuarioService],
})
export class usuarioModule {}
