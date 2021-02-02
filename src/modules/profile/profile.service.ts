import { PrismaService } from '@modules/prisma/prisma.service';
import { ProfileWhereUniqueInput } from './dto/profile-where-unique.input';
import { CreateProfileInput } from './dto/create-profile.input';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateProfileInput } from './dto/update-profile.input';
import { Profile } from './profile.model';
import { User } from '@modules/user/user.model';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from '@modules/user/dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  public async getProfile(where: ProfileWhereUniqueInput) {
    return await this.prisma.profile.findUnique({
      where,
      rejectOnNotFound: true,
    });
  }
  public async getProfileByUser(userWhere: UserWhereUniqueInput) {
    const [profile] = await this.prisma.profile.findMany({
      where: {
        user: userWhere,
      },
      take: 1,
    });
    return profile;
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

  public async deleteProfile(where: ProfileWhereUniqueInput): Promise<Profile> {
    try {
      return await this.prisma.profile.delete({ where });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
