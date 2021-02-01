import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

const prisma = new PrismaClient();

async function main() {
  dotenv.config();
  console.log('Seeding...');

  // password: 1234567
  const user1 = await prisma.user.create({
    data: {
      email: 'tester1@example.com',
      username: 'tester1',
      password: '$2y$10$hd/JLwBF16K9QNgXdlbzbOgCaGjYrRtQIiTGwxo6U7tA8XaWgvhAq ',
      role: 'USER',
      posts: {
        create: {
          title: 'Join us for Prisma Day 2021',
          content: 'https://www.prisma.io/day/',
          published: true,
        },
      },
    },
  });

  // password: 1234567

  const user2 = await prisma.user.create({
    data: {
      email: 'admin-tester1@example.com',
      username: 'admin-tester1',
      password: '$2y$10$hd/JLwBF16K9QNgXdlbzbOgCaGjYrRtQIiTGwxo6U7tA8XaWgvhAq ',
      role: 'ADMIN',
      posts: {
        create: [
          {
            title: 'Subscribe to GraphQL Weekly for community news',
            content: 'https://graphqlweekly.com/',
            published: true,
          },
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://twitter.com/prisma',
            published: false,
          },
        ],
      },
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
