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
import { ProfileWhereUniqueInput } from './dto/profile-where-unique.input';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';
import { CurrentUser } from '@modules/user/user.decorator';
import { User } from '@modules/user/user.model';
import { UserWhereUniqueInput } from '@modules/user/dto';

@Resolver(() => Profile)
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
    return await this.profileService.getUserOfProfile(profile.id);
  }

  /* Mutations */
  @Mutation(() => Profile)
  public async createProfile(
    @Args('data') input: CreateProfileInput,
    @CurrentUser() user: User,
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
