import { Test, TestingModule } from '@nestjs/testing';
import { SpeecherController } from './speecher.controller';
import { SpeecherService } from './speecher.service';

describe('SpeecherController', () => {
  let controller: SpeecherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpeecherController],
      providers: [SpeecherService],
    }).compile();

    controller = module.get<SpeecherController>(SpeecherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
