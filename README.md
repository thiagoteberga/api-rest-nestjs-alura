# CURSO ALURA - NestJS
## APIs REST com NestJS: Buscas, validação, serialização e detalhes arquiteturais

> Curso realizado no dia 27-10-2021.

## Anotações Importantes

### Controller
> O controller deve ser responsável apenas pela criação dos Paths (endpoints) e definição do verbo HTTP.
> Os services são importados dentro do controller, e são instanciados através de um construtor.
> Toda a lógica será realizada no service, o controller não precisa saber o que será realizado por baixo dos panos.



## Estrutura do projeto
``` bash
  src/
    |__usuario/
       |__livros.controller.ts # configuração do endereço da URL e definição das funções
       |__ livros.service.ts # configuração das regras de negócio
    |__ app.module.ts # configurações geral do projeto, importação dos controllers, providers e configuração do banco.
    |__ main.ts # configurações da porta onde o servidor irá subir
    |__.env # arquivo que define as configuralções de conexão ao banco de dados do projeto...
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

# Ajustar a porta que o servidor irá utilizar no arquivo \src\main.ts
# Exemplo definindo a porta 3005
await app.listen(3005);

# Iniciar o servidor web com o Vue
npm start

```