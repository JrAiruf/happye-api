import { Test, TestingModule } from '@nestjs/testing';
import { SpeecherController } from '../speecher.controller';
import { SpeecherService } from '../speecher.service';
import { Repository } from 'typeorm';
import { Speecher } from '../entities/speecher.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('SpeecherController', () => {
  let repository: Repository<Speecher>
  let service: SpeecherService;
  let controller: SpeecherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpeecherController],
      providers: [
        SpeecherService,
        {
          provide: getRepositoryToken(Speecher),
          useClass: Repository
        }

      ],
    }).compile();

    repository = module.get(getRepositoryToken(Speecher))
    service = module.get<SpeecherService>(SpeecherService);
    controller = module.get<SpeecherController>(SpeecherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
