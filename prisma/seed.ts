import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  dotenv.config();
  console.log('Seeding...');

  await prisma.$connect();

  /*********************************************************************/
  /* Dangerous zone: */
  /* Delete all tables before seeding */
  // Only uncomment these block code below if you want to delete for all existed tables

  // await prisma.category.deleteMany({});
  // await prisma.post.deleteMany({});
  // await prisma.profile.deleteMany({});
  // await prisma.user.deleteMany({});

  /*********************************************************************/

  /* Category seeding */
  const category1 = await prisma.category.upsert({
    where: { slug: 'programing' },
    create: {
      name: 'Programing',
      slug: 'programing',
    },
    update: {
      name: 'Programing',
    },
  });

  const category2 = await prisma.category.upsert({
    where: { slug: 'web-development' },
    create: {
      name: 'Web development',
      slug: 'web-development',
    },
    update: {
      name: 'Web development',
    },
  });

  // password: 1234567

  const user1 = await prisma.user.upsert({
    where: { email: 'tester-user1@example.com' },
    create: {
      email: 'tester1@example.com',
      password: await bcrypt.hash('1234567', 12),
      role: 'USER',
      profile: {
        create: {
          username: 'tester-user1',
          firstName: 'User 1',
          lastName: 'Tester',
          bio: 'Web developer',
        },
      },
    },
    update: {
      email: 'tester1@example.com',
      password: await bcrypt.hash('1234567', 12),
      role: 'USER',
      profile: {
        upsert: {
          create: {
            username: 'tester1',
            firstName: 'User 1',
            lastName: 'Tester',
            bio: 'Web developer',
          },
          update: {
            firstName: 'User 1',
            lastName: 'Tester',
            bio: 'Web developer',
          },
        },
      },
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'tester-user2@example.com' },
    create: {
      email: 'tester-user2@example.com',
      password: await bcrypt.hash('1234567', 12),
      role: 'USER',
      profile: {
        create: {
          username: 'tester-user2',
          firstName: 'User 2',
          lastName: 'Tester',
          bio: 'Web developer',
        },
      },
    },
    update: {
      email: 'tester-user2@example.com',
      password: await bcrypt.hash('1234567', 12),
      role: 'USER',
      profile: {
        upsert: {
          create: {
            username: 'tester-user2',
            firstName: 'User 2',
            lastName: 'Tester',
            bio: 'Web developer',
          },
          update: {
            firstName: 'User 2',
            lastName: 'Tester',
            bio: 'Web developer',
          },
        },
      },
    },
  });

  // password: 1234567

  const user3 = await prisma.user.upsert({
    where: { email: 'tester-admin1@example.com' },
    create: {
      email: 'tester-admin1@example.com',
      password: await bcrypt.hash('1234567', 12),
      role: 'ADMIN',
      profile: {
        create: {
          username: 'tester-admin1',
          firstName: 'Admin 1',
          lastName: 'Tester',
          bio: 'Fullstack developer',
        },
      },
    },
    update: {
      password: await bcrypt.hash('1234567', 12),
      role: 'ADMIN',
      profile: {
        upsert: {
          create: {
            username: 'tester-admin1',
            firstName: 'Admin 1',
            lastName: 'Tester',
            bio: 'Fullstack developer',
          },
          update: {
            firstName: 'Admin 1',
            lastName: 'Tester',
            bio: 'Fullstack developer',
          },
        },
      },
    },
  });

  /* Post seeding */
  //Post 1
  await prisma.post.upsert({
    where: { slug: 'join-us-for-prisma-day-2021' },
    create: {
      title: 'Join us for Prisma Day 2021',
      slug: 'join-us-for-prisma-day-2021',
      content: 'https://www.prisma.io/day/',
      published: true,
      author: { connect: { id: user1.id } },
      categories: {
        connect: [{ id: category1.id }, { id: category2.id }],
      },
    },
    update: {
      title: 'Join us for Prisma Day 2021',
      slug: 'join-us-for-prisma-day-2021',
      content: 'https://www.prisma.io/day/',
      published: true,
      author: { connect: { id: user1.id } },
      categories: {
        connect: [{ id: category1.id }, { id: category2.id }],
      },
    },
  });

  //Post 2
  await prisma.post.upsert({
    where: { slug: 'subscribe-to-graphql-weekly-for-community-news' },
    create: {
      title: 'Subscribe to GraphQL Weekly for community news',
      slug: 'subscribe-to-graphql-weekly-for-community-news',
      content: 'https://graphqlweekly.com/',
      published: true,
      author: { connect: { id: user2.id } },
      categories: {
        connect: [{ id: category1.id }, { id: category2.id }],
      },
    },
    update: {
      title: 'Subscribe to GraphQL Weekly for community news',
      slug: 'subscribe-to-graphql-weekly-for-community-news',
      content: 'https://graphqlweekly.com/',
      published: true,
      author: { connect: { id: user2.id } },
      categories: {
        connect: [{ id: category1.id }, { id: category2.id }],
      },
    },
  });

  // Post 3
  await prisma.post.upsert({
    where: { slug: 'follow-prisma-on-twitter' },
    create: {
      title: 'Follow Prisma on Twitter',
      slug: 'follow-prisma-on-twitter',
      content: 'https://twitter.com/prisma',
      published: true,
      author: { connect: { id: user2.id } },
      categories: {
        connect: [{ id: category1.id }, { id: category2.id }],
      },
    },
    update: {
      title: 'Follow Prisma on Twitter',
      slug: 'follow-prisma-on-twitter',
      content: 'https://twitter.com/prisma',
      published: true,
      author: { connect: { id: user2.id } },
      categories: {
        connect: [{ id: category1.id }, { id: category2.id }],
      },
    },
  });

  // Post 4
  await prisma.post.upsert({
    where: { slug: 'follow-nestjs-github' },
    create: {
      title: 'Follow Nestjs on GitHub',
      slug: 'follow-nestjs-github',
      content: 'https://github.com/nestjs/nest',
      published: true,
      author: { connect: { id: user3.id } },
      categories: {
        connect: [{ id: category1.id }, { id: category2.id }],
      },
    },
    update: {
      title: 'Follow Nestjs on GitHub',
      slug: 'follow-nestjs-github',
      content: 'https://github.com/nestjs/nest',
      published: true,
      author: { connect: { id: user3.id } },
      categories: {
        connect: [{ id: category1.id }, { id: category2.id }],
      },
    },
  });

  console.log({ user1, user2, user3 });
  console.log('------------------------------------------------');
  console.log('Seeding successfully ...........................');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
