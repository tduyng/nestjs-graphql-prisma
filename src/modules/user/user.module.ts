import { PrismaService } from 'src/providers/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { PasswordService } from '../auth/services/password.service';
import { UserService } from './services/user.service';
import { UserResolver } from './resolvers/user.resolver';
import { AdminResolver } from './resolvers/admin-user.resolver';
import { PrismaSelectService } from 'src/providers/prisma/prisma-select.service';
import { PrismaModule } from 'src/providers/prisma/prisma.module';
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
