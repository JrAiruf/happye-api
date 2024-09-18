import { Test, TestingModule } from '@nestjs/testing';
import { SpeecherService } from '../speecher.service';
import { Speecher } from '../entities/speecher.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('SpeecherService', () => {
  let service: SpeecherService;
  let repository: Repository<Speecher>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SpeecherService,
        {
          provide: getRepositoryToken(Speecher),
          useClass: Repository
        }
      ],
    }).compile();

    service = module.get<SpeecherService>(SpeecherService);
    repository = module.get(getRepositoryToken(Speecher))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
