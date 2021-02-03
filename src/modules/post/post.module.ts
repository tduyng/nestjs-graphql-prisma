import { CategoryService } from '@modules/category/category.service';
import { PrismaService } from '@modules/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
  providers: [PostService, PostResolver, PrismaService, CategoryService],
})
export class PostModule {}
