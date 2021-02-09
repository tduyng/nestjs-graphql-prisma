import { PrismaSelectService } from '@modules/prisma/prisma-select.service';
import { PrismaService } from '@modules/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';

@Module({
  providers: [
    CategoryService,
    CategoryResolver,
    PrismaService,
    PrismaSelectService,
  ],
})
export class CategoryModule {}
