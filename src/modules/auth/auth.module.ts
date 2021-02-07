import { PrismaService } from '@modules/prisma/prisma.service';
import { UserService } from '@modules/user/services/user.service';
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule, JwtModule.register({})],
  providers: [PrismaService, UserService, JwtService],
})
export class AuthModule {}
