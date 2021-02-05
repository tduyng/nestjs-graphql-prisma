import { PrismaService } from '@modules/prisma/prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateProfileInput } from './dto/update-profile.input';
import { Profile } from './profile.model';
import { User } from '@modules/user/user.model';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from '@common/@generated/profile';
import { UserWhereUniqueInput } from '@common/@generated/user';
import { CreateProfileInput } from './dto';

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
}
