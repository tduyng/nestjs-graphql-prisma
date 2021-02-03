import { Test, TestingModule } from '@nestjs/testing';
import { ProfileService } from '../post.service';
import { Profile } from '../profile.model';
import { ProfileResolver } from '../post.resolver';
import { CreateProfileInput } from '../dto/create-post.input';
import { ProfileWhereUniqueInput } from '../dto/post-where-unique.input';
import { User } from '@modules/user/user.model';
import { UserWhereUniqueInput } from '@modules/user/dto';

const oneProfile = {
  id: 'some profileId',
  firstName: 'some  first name',
  lastName: 'some last name',
  user: {
    id: 'some postId',
    email: 'some email',
    username: 'some-username',
  } as User,
} as Profile;

const oneUser = {
  id: 'some postId',
  email: 'some email',
  username: 'some-username',
} as User;

const profileInput = {
  firstName: 'some first name',
  lastName: 'some last name',
  bio: 'some bio',
} as CreateProfileInput;

const profileWhereUniqueInput = {
  id: 'some profileId',
} as ProfileWhereUniqueInput;

const userWhereUniqueInput = {
  id: 'some userId',
} as UserWhereUniqueInput;

describe('ProfileResolver', () => {
  let profileResolver: ProfileResolver;
  let profileService;

  const mockProfileService = () => ({
    getProfile: jest.fn(),
    getProfileByUser: jest.fn(),
    getUserOfProfile: jest.fn(),
    createProfile: jest.fn(),
    updateProfile: jest.fn(),
    deleteProfile: jest.fn(),
  });

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfileResolver,
        {
          provide: ProfileService,
          useFactory: mockProfileService,
        },
      ],
    }).compile();

    profileResolver = module.get<ProfileResolver>(ProfileResolver);
    profileService = module.get<ProfileService>(ProfileService);
  });

  it('Should be defined', () => {
    expect(profileResolver).toBeDefined();
  });

  describe('profile', () => {
    it('Should return profile', async () => {
      profileService.getProfile.mockReturnValue(oneProfile);
      const result = await profileResolver.profile(profileWhereUniqueInput);
      expect(result).toEqual(oneProfile);
    });
  });

  describe('profileByUser', () => {
    it('Should return profile', async () => {
      profileService.getProfileByUser.mockReturnValue(oneProfile);
      const result = await profileResolver.profileByUser(userWhereUniqueInput);
      expect(result).toEqual(oneProfile);
    });
  });

  describe('user', () => {
    it('Should return an user', async () => {
      profileService.getUserOfProfile.mockReturnValue(oneProfile.user);
      const result = await profileResolver.user(oneProfile);
      expect(result).toEqual(oneProfile.user);
    });
  });

  describe('createProfile', () => {
    it('Should return an profile', async () => {
      profileService.createProfile.mockReturnValue(oneProfile);
      const result = await profileResolver.createProfile(profileInput, oneUser);
      expect(result).toEqual(oneProfile);
    });
  });

  describe('updateProfile', () => {
    it('Should return an Profile as result', async () => {
      profileService.updateProfile.mockReturnValue(oneProfile);
      const result = await profileResolver.updateProfile(
        oneProfile,
        profileInput,
      );
      expect(result).toEqual(oneProfile);
    });
  });

  describe('deleteProfile', () => {
    it('Should return an profile', async () => {
      profileService.deleteProfile.mockReturnValue(oneProfile);
      const result = await profileResolver.deleteProfile(
        profileWhereUniqueInput,
      );
      expect(result).toEqual(oneProfile);
    });
  });
});
