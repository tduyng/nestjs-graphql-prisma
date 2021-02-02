import { PrismaService } from '@modules/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ProfileResolver } from './profile.resolver';
import { ProfileService } from './profile.service';

@Module({
  providers: [ProfileService, ProfileResolver, PrismaService],
})
export class ProfileModule {}
