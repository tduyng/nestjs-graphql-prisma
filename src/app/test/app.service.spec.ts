import { AppService } from '@app/app.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppService', () => {
  let appService: AppService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = module.get<AppService>(AppService);
  });
  describe('getHello', () => {
    it('Should return `Hello World!`', () => {
      expect(appService.getHello()).toEqual('Hello World!');
    });
  });

  describe('getHelloName', () => {
    it('Should return Hello ${name}!', () => {
      expect(appService.getHelloName('some name')).toEqual('Hello some name!');
    });
  });
});
