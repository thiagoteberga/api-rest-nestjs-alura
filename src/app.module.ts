import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { FiltroDeExcecaoHttp } from './common/filtros/filtro-de-excecao-http.filter';
import { TransformaRespostaInterceptor } from './core/http/transforma-resposta.interceptor';
import { usuarioModule } from './usuario/usuario.module';

@Module({
  imports: [usuarioModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FiltroDeExcecaoHttp 
    },
    {
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor 
    },
    {
    provide: APP_INTERCEPTOR,
    useClass: TransformaRespostaInterceptor 
  }],
})
export class AppModule {}
