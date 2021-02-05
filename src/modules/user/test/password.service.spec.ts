import { Test, TestingModule } from '@nestjs/testing';
import { PasswordService } from '../services/password.service';

const plainPassword = '1234567';
const hashedPassword =
  '$2b$10$Vw/tR.zQEiTbOLPPs5k3QOqWSLXv9oTbsO04CWT4OIsjg4dzZ5PM6';

describe('UserService', () => {
  let passwordService: PasswordService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordService],
    }).compile();

    passwordService = module.get<PasswordService>(PasswordService);
  });

  it('Should be defined', () => {
    expect(PasswordService).toBeDefined();
  });

  describe('validatePassword', () => {
    it('Should matched password', async () => {
      const result = await passwordService.validatePassword(
        plainPassword,
        hashedPassword,
      );
      expect(result).toBe(true);
    });
  });

  describe('hashPassword', () => {
    it('Should return an string', async () => {
      const result = await passwordService.hashPassword(plainPassword);
      expect(typeof result).toBe('string');
    });
  });
});
