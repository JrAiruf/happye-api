import { Test, TestingModule } from '@nestjs/testing';
import { HeventService } from './hevent.service';

describe('HeventService', () => {
  let service: HeventService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeventService]
    }).compile();

    service = module.get<HeventService>(HeventService);
  });

  it('service:HeventService should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Create Hevent', () => {
    it('should fail to create a new Hevent', () => {

    });
  });
});