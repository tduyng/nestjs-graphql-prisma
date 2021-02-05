import { PrismaService } from '@modules/prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { Profile } from '../profile.model';
import { ProfileService } from '../profile.service';
import { User } from '@modules/user/user.model';
import { ProfileWhereUniqueInput } from '@common/@generated/profile';
import { UserWhereUniqueInput } from '@common/@generated/user';
import { CreateProfileInput } from '../dto';

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

describe('ProfileService', () => {
  let profileService: ProfileService;
  let prismaService;

  const mockPrismaService = () => ({
    profile: {
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      findUnique: jest.fn(),
      delete: jest.fn(),
    },
  });

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfileService,
        {
          provide: PrismaService,
          useFactory: mockPrismaService,
        },
      ],
    }).compile();

    profileService = module.get<ProfileService>(ProfileService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('Should be defined', () => {
    expect(profileService).toBeDefined();
  });

  describe('getProfile', () => {
    it('Should return an profile', async () => {
      prismaService.profile.findUnique.mockReturnValue(oneProfile);
      const result = await profileService.getProfile(profileWhereUniqueInput);
      expect(result).toEqual(oneProfile);
    });
  });

  describe('getProfileByUser', () => {
    it('Should return an profile', async () => {
      prismaService.profile.findMany.mockReturnValue([oneProfile]);
      const result = await profileService.getProfileByUser(
        userWhereUniqueInput,
      );
      expect(result).toEqual(oneProfile);
    });
  });

  describe('getUserOfProfile', () => {
    it('Should return an profile', async () => {
      prismaService.profile.findUnique.mockReturnValue(oneProfile);
      const result = await profileService.getUserOfProfile(
        profileWhereUniqueInput,
      );
      expect(result).toEqual(oneProfile.user);
    });
  });

  describe('createProfile', () => {
    it('Should return an user after created successfully', async () => {
      prismaService.profile.create.mockReturnValue(oneProfile);
      const input = profileInput;
      const user = oneUser;
      const result = await profileService.createProfile({
        input,
        user,
      });
      expect(result).toEqual(oneProfile);
    });
  });

  describe('updateProfile', () => {
    it('Should return an profile', async () => {
      prismaService.profile.update.mockReturnValue(oneProfile);
      const result = await profileService.updateProfile(
        profileWhereUniqueInput,
        profileInput,
      );
      expect(result).toEqual(oneProfile);
    });
  });
});
