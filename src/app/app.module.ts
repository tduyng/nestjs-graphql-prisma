import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { graphqlOptions } from '../common/configs/graphql-options';
import { PrismaModule } from '@modules/prisma/prisma.module';
import { AppResolver } from '@app/app.resolver';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '@modules/user/user.module';
import { CategoryModule } from '@modules/category/category.module';
import { ProfileModule } from '@modules/profile/profile.module';
import { ThrottlerModule } from 'nestjs-throttler';
import { ConfigService } from '@modules/config/config.service';

@Module({
  imports: [
    ThrottlerModule.forRootAsync({
      useFactory: (config: ConfigService) => config.throttle,
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot(graphqlOptions()),
    PrismaModule,
    UserModule,
    CategoryModule,
    ProfileModule,
  ],
  providers: [AppResolver, AppService],
  controllers: [AppController],
})
export class AppModule {}
