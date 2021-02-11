import { PrismaService } from '@modules/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { PasswordService } from './services/password.service';
import { UserService } from './services/user.service';
import { UserResolver } from './resolvers/user.resolver';
import { AdminResolver } from './resolvers/admin-user.resolver';
import { PrismaSelectService } from '@modules/prisma/prisma-select.service';

@Module({
  providers: [
    UserService,
    PasswordService,
    PrismaService,
    UserResolver,
    AdminResolver,
    PrismaSelectService,
  ],
  exports: [PasswordService, UserService],
})
export class UserModule {}
