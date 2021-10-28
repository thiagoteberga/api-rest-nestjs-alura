# CURSO ALURA - NestJS
## APIs REST com NestJS: Buscas, validação, serialização e detalhes arquiteturais

> Curso realizado no dia 27-10-2021.

## Anotações Importantes

### Controller
> O controller deve ser responsável apenas pela criação dos Paths (endpoints) e definição do verbo HTTP.

> Os services são importados dentro do controller, e são instanciados através de um construtor.

> Toda a lógica será realizada no service, o controller não precisa saber o que será realizado por baixo dos panos.

> Controlador é uma classe que irá conter métodos correlacionados a um mesmo domínio da aplicação e que serão ativados pelas requisições dos endpoints.

### Provider
> Um provider é toda classe que é "Injectable"

### Modulo
> Um módulo pode ser visto como um agregador de classes que são correlacionadas dentro da aplicação.

### Entidade
> Uma entidade (entity) é um objeto que existe e é distinguível dos outros objetos. Por exemplo, Paulo Silva com número de CPF 123.456.789-00 é uma entidade, visto que isso identifica unicamente uma pessoa particular do universo.

### Pipes
> A classe precisa ter o decorator @Injectable e implementar a PipeTransform;


### DTO (Data Transfer Object)
> Objeto de Transferência de Dados, é um padrão de projeto de software usado para transferir dados entre subsistemas de um software. DTOs são frequentemente usados em conjunção com objetos de acesso a dados para obter dados de um banco de dados.

### Serialização
> Serialização é o processo de transformação de informações internas de uma aplicação em um formato trafegável pela rede ou que possa ser salvo em um arquivo.
> Pegar os dados da rede e transformar em um objeto javascript é deserialização.

>No NestJS a serialização é realizada por meio dos Interceptor.

### Filtros
> Filtros podem ser utilizados para gerar as exceções (erros).

### Formas de Implementar o PIPE:

``` bash
const app = await NestFactory.create(AppModule);
app.useGlobalPipes(new ValidationPipe());
```
Dessa forma declaramos a utilização do ValidationPipe como sendo global na aplicação. Contudo, é importante se atentar que perde-se a possibilidade de injeção de dependências.


``` bash
@Post()
async cria(
 @Body(new ValidationPipe()) livro: Livro) {
 this.livroService.cria(livro);
}
```
Pipes também podem ser aplicados especifamente em parâmetros de métodos.

``` bash
import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

@Module({
 providers: [
   {
     provide: APP_PIPE,
     useClass: ValidationPipe,
   },
 ],
})
export class AppModule {}
```
Uma segunda forma de declarar um pipe de forma global é adicioná-lo à seção providers de qualquer módulo da aplicação. Com essa maneira, ganha-se a possibilidade de injetar dependências no pipe.

``` bash
@Post()
@UsePipes(new ValidationPipe())
async cria(@Body() livro: Livro) {
 this.livroService.cria(livro);
}
```
Com o decorator @UsePipes() podemos declarar um conjunto de pipes para contextos específicos, como um método ou até mesmo para todo um controlador.


## Estrutura do projeto
``` bash
  src/
    |__ usuario/
       |__ usuario.controller.ts # configuração do endereço da URL e definição das funções
       |__ usuario.service.ts # configuração das regras de negócio
       |__ usuario.entity.ts # configuração dos campos da entidade, ideal para deixar o codigo fortemente tipado e auxilia no autocomplete 
       |__ usuario.modulo.ts # configuração de um módulo para cada entidade
    |__ app.module.ts # configurações geral do projeto, importação dos controllers, providers, modulos e configuração do banco.
    |__ main.ts # configurações da porta onde o servidor irá subir
    |__ .env # arquivo que define as configuralções de conexão ao banco de dados do projeto...
```


# Ferramentas Utilizadas:

## NodeJS:
https://nodejs.org/en/download/

## Git:
https://git-scm.com/downloads

## Postman:
https://www.getpostman.com/



# Comandos para Rodar o Projeto Localmente:

## Instalação do NESTJS
``` bash

Ctrl + Ponto: Sugestão de IMPORT do VS Code

# Rodar a Instalação
npm install -g @nestjs/cli

# Verificar a versão do Nest
nest -v

# Criar o projeto chamado de livros-api.
nest new livros-api

# Instalar Sequelize
# https://docs.nestjs.com/techniques/database#sequelize-integration
npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2

# Instalar as Configurações
# https://docs.nestjs.com/techniques/configuration
npm i --save @nestjs/config

# Instalar RXJS
npm install rxjs --save-exact

# Bibliotecas para Validação dos Campos antes de Chegar no Controller
npm install class-transformer@0.2.3 class-validator@0.12.2 --save-exact

# Ajustar a porta que o servidor irá utilizar no arquivo \src\main.ts
# Exemplo definindo a porta 3005
await app.listen(3005);

# Iniciar o servidor web com o Vue
npm start

```