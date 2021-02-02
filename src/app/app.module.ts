import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { graphqlOptions } from '../common/configs/graphql-options';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@modules/prisma/prisma.module';
import { AppResolver } from '@app/app.resolver';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '@modules/user/user.module';
import { CategoryModule } from '@modules/category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    GraphQLModule.forRoot(graphqlOptions()),
    PrismaModule,
    UserModule,
    CategoryModule,
  ],
  providers: [AppResolver, AppService],
  controllers: [AppController],
})
export class AppModule {}
