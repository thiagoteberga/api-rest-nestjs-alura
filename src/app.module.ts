import { Module } from '@nestjs/common';
import { usuarioController } from './usuario/usuario.controller';

@Module({
  imports: [],
  controllers: [usuarioController],
  providers: [],
})
export class AppModule {}
