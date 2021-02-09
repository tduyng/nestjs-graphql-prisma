import { Test, TestingModule } from '@nestjs/testing';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile.model';
import { ProfileResolver } from '../profile.resolver';
import { CreateProfileInput } from '../dto';
import { User } from '@modules/user/user.model';
import { ProfileWhereUniqueInput } from '@common/@generated/profile';
import { UserWhereUniqueInput } from '@common/@generated/user';

const oneProfile = {
  id: 'some profileId',
  username: 'some-username',
  firstName: 'some  first name',
  lastName: 'some last name',
  user: {
    id: 'some postId',
    email: 'some email',
  } as User,
} as Profile;

const oneUser = {
  id: 'some postId',
  email: 'some email',
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

  describe('profileCurrentUser', () => {
    it('Should return profile', async () => {
      profileService.getProfileByUser.mockReturnValue(oneProfile);
      const result = await profileResolver.profileCurrentUser(oneUser);
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
});
