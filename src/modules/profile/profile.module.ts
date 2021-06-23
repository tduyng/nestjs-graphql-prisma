import { PrismaSelectService } from 'src/providers/prisma/prisma-select.service';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ProfileResolver } from './profile.resolver';
import { ProfileService } from './profile.service';

@Module({
  providers: [
    ProfileService,
    ProfileResolver,
    PrismaService,
    PrismaSelectService
  ]
})
export class ProfileModule {}
