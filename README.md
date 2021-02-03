# NestJS - GraphQL - Prisma

Example backend [NestJS](https://nestjs.com/) - [Graphql](https://graphql.org/) project using [Prisma 2](https://www.prisma.io/) & [PostgreSQL](https://www.postgresql.org/)

---

**Table of contents**

<details>
<summary>Click here to expand</summary>

- [NestJS - GraphQL - Prisma](#nestjs---graphql---prisma)
  - [Features](#features)
  - [Prerequisite](#prerequisite)
  - [Getting started](#getting-started)
    - [Installation](#installation)
    - [Command lines](#command-lines)
    - [**Docker**](#docker)
  - [Project structure](#project-structure)
  - [Thanks](#thanks)


</details>



## Features

Project inspired from [Nestjs-prisma-starter](https://github.com/fivethree-team/nestjs-prisma-starter) of [fivethree-team](https://github.com/fivethree-team)

I create this repo for learning, practicing and understanding how to work NestJS, GraphQL & Prisma together. Project also how to build a clean architecture scalable & testable.

Features of project:

- GraphQL with [apollo-server-express](https://github.com/apollographql/apollo-server), solution [code first](https://docs.nestjs.com/graphql/quick-start#code-first) and using [GraphQL play ground](https://github.com/graphql/graphql-playground)
- Using [PostgreQL](https://github.com/brianc/node-postgres) for database and [Prisma 2](https://github.com/prisma/prisma) as ORM
- CRUD operations, database relationship, pagination
- [NestJS Authentication](https://docs.nestjs.com/security/authentication) with [Passport](https://github.com/jaredhanson/passport), [JWT](http://www.passportjs.org/packages/passport-jwt/) and [Bcrypt](https://github.com/kelektiv/node.bcrypt.js/)
- Verification email for register
- Docker solution for PostgreSQL, PGAdmin, Prisma
- Next generation Typescript
- Testing: Unit testing, End to End testing
- Database seeding

## Prerequisite

If you want to develop project only on your local, your need have:
- [NodeJS](https://nodejs.org/en/download/): I use NodeJS lts version (14.15.1)
- npm or yarn: [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) recommend
- [@prisma/cli](https://www.prisma.io/docs/concepts/components/prisma-cli/installation)
- [PostgreSQL](https://www.postgresql.org/download/)
- [PgAdmin(optional)](https://www.pgadmin.org/download/): UI tool to manage database from PostgreSQL

If you don't want to install all this tools, you can check the [docker solution](#docker) below.
## Getting started

### Installation

- Clone project from this repository
- Create and update `.env` file for variables environment
  ```bash
  $ cp .env.example .env
  ```

  Then modify the variables as you want.

  Example of `.env` files:
  ```env
  SERVER_PORT=1776
  DB_CONNECTOR=postgres
  DB_HOST=postgres
  DB_USER=postgres
  DB_PASSWORD=postgres
  DB_DATABASE=nest_graphql
  DB_PORT=5432
  PGADMIN_DEFAULT_EMAIL=admin@admin.com
  PGADMIN_DEFAULT_PASSWORD=admin


  DATABASE_URL=postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?schema=public
  ```
- Install dependencies
  ```bash
  $ yarn
  # or npm install
  ```
- Generate prisma schema
  Make sure you generate prisma schema before run server:
  ```bash
  $ yarn prisma generate
  ```

  Check [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client) for more details how `prisma generate works`

- Run server locally
  ```bash
  $ yarn start:dev
  # or npm run start:dev
  ```

### Command lines

Other useful commands to work with project:
- Run production
  ```ts
  $ yarn start:prod
  ```
- Run testing:
  ```bash
  $ yarn test # for running the the Unit $ integration testing
  $ yarn test:e2e  # for running end to end testing
  ```
- Prisma migrate
  [Prisma migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate) is an imperative database schema migration tool that enables you to make changes to your database schema.

  Migrate auto your schema:
  ```bash
  $ yarn prisma migrate dev --preview-feature
  ```

  Migrate with the name schema:
  ```bash
  $ yarn prisma migrate dev --name initDb --preview-feature
  ```

  When we run `prisma generate` or `prisma migrate`, `prisma/cli` will try connect with your database first. So you need to connect successfully with your database through your variable `DATABASE_URL` given in `prisma.schema`:

  For example, you have configuration in your `prisma.schema` like below:

  ```prisma
  // prisma.schema
  datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
  }
  ```

  So you need to provide this value in `.env` file:

  ```
  DB_HOST=postgres
  DB_USER=postgres
  DB_PASSWORD=postgres
  DB_DATABASE=nest_graphql
  DB_PORT=5432
  DATABASE_URL="postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?schema=public"

  ```

  Check more information at [Prisma migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate)

- Seeding database(optional)

  ```bash
  $ yarn seed
  ```
- Prisma studio
  A Visual Interface for Your Database
  [Prisma Studio](https://www.prisma.io/blog/prisma-studio-3rtf78dg99fe) helps developers manage their application data. We're excited to share that it is now part of the stable Prisma release. Try out the [online demo](https://prisma.studio/) or connect it to your existing database.

  So with Prisma studio, you maybe don't need **pgAdmin** anymore.
  <div align="center">
    <img src="docs/img/prisma-studio.png" alt="prisma-studio"/>
  </div>

  Ton run Prisma studio:
  ```bash
  $ yarn prisma:studio
  # or npx prisma studio
  # or yarn prisma studio
  ```
  Then check out at http://localhost:5555


  You can check more other commands in section `scripts` of `package.json`.
### **Docker**

**Working in progress: Explication how to use**

## Project structure

**Working in progress: Add table for explaining each folder container**

..........................

---
## Thanks
