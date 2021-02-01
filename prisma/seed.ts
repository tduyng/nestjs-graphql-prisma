import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

const prisma = new PrismaClient();

async function main() {
  dotenv.config();
  console.log('Seeding...');

  await prisma.$connect();

  await prisma.category.deleteMany({});
  await prisma.post.deleteMany({});
  await prisma.profile.deleteMany({});
  await prisma.user.deleteMany({});

  /* Category seeding */
  const category1 = await prisma.category.create({
    data: {
      name: 'Programing',
      slug: 'programing',
    },
  });

  const category2 = await prisma.category.create({
    data: {
      name: 'Web development',
      slug: 'web-development',
    },
  });

  // password: 1234567

  const user1 = await prisma.user.create({
    data: {
      email: 'tester1@example.com',
      username: 'tester1',
      password: '$2y$10$hd/JLwBF16K9QNgXdlbzbOgCaGjYrRtQIiTGwxo6U7tA8XaWgvhAq ',
      role: 'USER',
      profile: {
        create: {
          firstName: 'Tester',
          lastName: '1',
          bio: 'Web developer',
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
      profile: {
        create: {
          firstName: 'Admin',
          lastName: 'Site',
          bio: 'Fullstack developer',
        },
      },
    },
  });

  /* Post seeding */

  const post1 = await prisma.post.create({
    data: {
      title: 'Join us for Prisma Day 2021',
      slug: 'join-us-for-prisma-day-2021',
      content: 'https://www.prisma.io/day/',
      published: true,
    },
  });
  await prisma.post.update({
    where: { id: post1.id },
    data: {
      author: { connect: { id: user1.id } },
      categories: {
        connect: [{ id: category1.id }, { id: category2.id }],
      },
    },
  });

  const post2 = await prisma.post.create({
    data: {
      title: 'Subscribe to GraphQL Weekly for community news',
      slug: 'subscribe-to-graphql-weekly-for-community-news',
      content: 'https://graphqlweekly.com/',
      published: true,
    },
  });
  await prisma.post.update({
    where: { id: post2.id },
    data: {
      author: { connect: { id: user2.id } },
      categories: {
        connect: [{ id: category1.id }, { id: category2.id }],
      },
    },
  });

  const post3 = await prisma.post.create({
    data: {
      title: 'Follow Prisma on Twitter',
      slug: 'follow-prisma-on-twitter',
      content: 'https://twitter.com/prisma',
      published: true,
    },
  });
  await prisma.post.update({
    where: { id: post3.id },
    data: {
      author: { connect: { id: user2.id } },
      categories: {
        connect: [{ id: category1.id }, { id: category2.id }],
      },
    },
  });

  console.log({ user1, user2 });
  console.log('Seeding successfully ...');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
