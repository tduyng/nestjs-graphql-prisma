import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service';
import { User } from '@modules/user/user.model';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from '@common/@generated/profile';
import { UserWhereUniqueInput } from '@common/@generated/user';
import { CreateProfileInput, UpdateProfileInput } from './dto';
import { GqlUser } from '@modules/user/decorators';
import { UseGuards } from '@nestjs/common';
import { GqlGuard } from '@modules/auth/guards/gql.guard';

@Resolver(() => Profile)
@UseGuards(GqlGuard)
export class ProfileResolver {
  constructor(private profileService: ProfileService) {}

  /* Query */
  @Query(() => Profile)
  public async profile(@Args('where') where: ProfileWhereUniqueInput) {
    return await this.profileService.getProfile(where);
  }
  @Query(() => Profile)
  public async profileByUser(@Args('where') where: UserWhereUniqueInput) {
    return await this.profileService.getProfileByUser(where);
  }

  @ResolveField(() => User)
  public async user(@Parent() profile: Profile) {
    const where: Prisma.ProfileWhereUniqueInput = {
      id: profile.id,
    };
    return await this.profileService.getUserOfProfile(where);
  }

  /* Mutations */
  @Mutation(() => Profile)
  public async createProfile(
    @Args('data') input: CreateProfileInput,
    @GqlUser() user: User,
  ) {
    return await this.profileService.createProfile({ input, user });
  }

  @Mutation(() => Profile)
  public async updateProfile(
    @Args('where') where: ProfileWhereUniqueInput,
    @Args('data') data: UpdateProfileInput,
  ) {
    return await this.profileService.updateProfile(where, data);
  }

  @Mutation(() => Profile)
  public async deleteProfile(@Args('where') where: ProfileWhereUniqueInput) {
    return await this.profileService.deleteProfile(where);
  }
}
