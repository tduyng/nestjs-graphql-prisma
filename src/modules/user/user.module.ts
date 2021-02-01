import { PrismaService } from '@modules/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { PasswordService } from './services/password.service';
import { UserService } from './services/user.service';
import { UserResolver } from './user.resolver';

@Module({
  providers: [UserService, PasswordService, PrismaService, UserResolver],
  exports: [PasswordService],
})
export class UserModule {}
