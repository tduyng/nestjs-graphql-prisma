import { CategoryService } from '@modules/category/category.service';
import { PrismaSelectService } from 'src/providers/prisma/prisma-select.service';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
  providers: [
    PostService,
    PostResolver,
    PrismaService,
    CategoryService,
    PrismaSelectService
  ]
})
export class PostModule {}
