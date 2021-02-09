import { PrismaService } from '@modules/prisma/prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateProfileInput } from './dto/update-profile.input';
import { Profile } from './profile.model';
import { User } from '@modules/user/user.model';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from '@common/@generated/profile';
import { CreateProfileInput } from './dto';
import { GraphQLResolveInfo } from 'graphql';
import { PrismaSelectService } from '@modules/prisma/prisma-select.service';

@Injectable()
export class ProfileService {
  constructor(
    private prisma: PrismaService,
    private prismaSelectService: PrismaSelectService,
  ) {}

  public async getProfile(
    where: ProfileWhereUniqueInput,
    info?: GraphQLResolveInfo,
  ) {
    // Prisma select to solve n+1 graphql problem
    const select = this.prismaSelectService.getValue(info);
    return await this.prisma.profile.findUnique({
      ...select,
      where,
      rejectOnNotFound: true,
    });
  }

  public async getUserOfProfile(where: ProfileWhereUniqueInput): Promise<User> {
    const profile: Profile = await this.prisma.profile.findUnique({
      where,
      include: {
        user: true,
      },
    });
    return profile.user;
  }

  public async createProfile({
    input,
    user,
  }: {
    input: CreateProfileInput;
    user: User;
  }) {
    const data: Prisma.ProfileCreateInput = {
      ...input,
      user: {
        connect: {
          id: user.id,
        },
      },
    };
    return await this.prisma.profile.create({
      data,
      include: {
        user: true,
      },
    });
  }

  public async updateProfile(
    where: ProfileWhereUniqueInput,
    profileInput: UpdateProfileInput,
  ) {
    try {
      return await this.prisma.profile.update({
        where,
        data: profileInput,
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
