import { AppController } from '@app/app.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../app.service';

describe('AppResolver', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppController, AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('Should be defined', () => {
    expect(appController).toBeDefined();
  });

  describe('helloWorld', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
