import { Global, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@modules/prisma/prisma.module';
import { AppResolver } from '@app/app.resolver';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '@modules/user/user.module';
import { CategoryModule } from '@modules/category/category.module';
import { ProfileModule } from '@modules/profile/profile.module';
import { PostModule } from '@modules/post/post.module';
import { graphqlModuleFactory } from '@common/configs/graphql-module.factory';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    GraphQLModule.forRootAsync({
      useFactory: graphqlModuleFactory,
    }),
    PrismaModule,
    UserModule,
    CategoryModule,
    ProfileModule,
    PostModule,
  ],
  providers: [AppResolver, AppService],
  controllers: [AppController],
})
export class AppModule {}
