import { PrismaService } from '@modules/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { PasswordService } from './services/password.service';
import { UserService } from './services/user.service';
import { UserResolver } from './user.resolver';
import { AdminResolver } from './admin.resolver';

@Module({
  providers: [
    UserService,
    PasswordService,
    PrismaService,
    UserResolver,
    AdminResolver,
  ],
  exports: [PasswordService],
})
export class UserModule {}
