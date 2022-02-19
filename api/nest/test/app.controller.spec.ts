import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getBaers', () => {
    it('should return "Cock Bärs"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getBaers()).toBe('Cock Bärs');
    });
  });
});
