<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

Este proyecto tiene como base:
  -creacion de 4 tipos de usuarios(usuario, usuMain, usuEmp, usuCli)
  -clase principal usuario, los otros 3 heredan de usuario
  -clase de pedir hora(usuMain,usuEmp,UsuCli)

## Instalacion

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Instalaciones necesarias

```bash
# uuid
$ npm i --save-dev @types/uuid
# Validacion para los Pipes
$ npm install class-validator
# Transformacion de clases
$ npm install class-transformer
```