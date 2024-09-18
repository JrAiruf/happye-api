import { Test, TestingModule } from '@nestjs/testing';
import { SpeecherService } from './speecher.service';

describe('SpeecherService', () => {
  let service: SpeecherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpeecherService],
    }).compile();

    service = module.get<SpeecherService>(SpeecherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
