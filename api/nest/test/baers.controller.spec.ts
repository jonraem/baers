import { Test, TestingModule } from '@nestjs/testing';
import { BaersController } from '../src/modules/baers/baers.controller';
import { BaersService } from '../src/modules/baers/baers.service';

describe('BaersController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [BaersController],
      providers: [BaersService],
    }).compile();
  });

  describe('getBaers', () => {
    it('should return "Cock Bärs"', () => {
      const baersController = app.get<BaersController>(BaersController);
      expect(baersController.getBaers()).toBe('Cock Bärs');
    });
  });
});
