import { PrismaService } from '@modules/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { PasswordService } from './services/password.service';
import { UserService } from './services/user.service';
import { UserResolver } from './resolvers/user.resolver';
import { AdminResolver } from './resolvers/admin-user.resolver';
import { PrismaSelectService } from '@modules/prisma/prisma-select.service';
import { PrismaModule } from '@modules/prisma/prisma.module';
import { UserExitsValidator } from './decorators';

@Module({
  imports: [PrismaModule],
  providers: [
    UserService,
    PasswordService,
    PrismaService,
    UserResolver,
    AdminResolver,
    PrismaSelectService,
    UserExitsValidator,
  ],
  exports: [PasswordService, UserService],
})
export class UserModule {}
