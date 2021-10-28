import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { AbstractHttpAdapter, HttpAdapterHost } from "@nestjs/core";
import { Observable } from "node_modules/rxjs/dist/types";
import { map } from 'rxjs/operators';
import { NestResponse } from "./nest-response";

@Injectable()
export class TransformaRespostaInterceptor implements NestInterceptor{
    
    private httpAdapter: AbstractHttpAdapter;

    constructor(adapterHost: HttpAdapterHost){
        this.httpAdapter = adapterHost.httpAdapter;
    }
    
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle()
                   .pipe(
                        map( (respostaDoControlador: NestResponse) => {
                            if (respostaDoControlador instanceof NestResponse) {
                                const contexto = context.switchToHttp();
                                const response = contexto.getResponse();
                                const { headers, status, body } = respostaDoControlador; 
                                
                                // Array: ['cabecalho1','cabecalho2']
                                const nomesDosCabecalhos = Object.getOwnPropertyNames(headers);

                                nomesDosCabecalhos.forEach( nomesDoCabecalho => {
                                    const valorDoCabecalho = headers[nomesDoCabecalho]
                                    this.httpAdapter.setHeader(response,nomesDoCabecalho,valorDoCabecalho);
                                });

                                this.httpAdapter.status(response, status);

                                return body;
                            }

                            return respostaDoControlador;
                        })
                   );
    }

}