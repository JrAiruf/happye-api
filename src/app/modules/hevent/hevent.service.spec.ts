import { Test } from '@nestjs/testing';
import { HeventService } from './hevent.service';
import { Hevent } from './entities/hevent.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('heventService', () => {
  let heventService: HeventService;
  let repository: Repository<Hevent>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        HeventService,
        {
          provide: getRepositoryToken(Hevent),
          useFactory: () => repository
        }
      ],
    }).compile();

    heventService = module.get<HeventService>(HeventService);
    repository = module.get(getRepositoryToken(Hevent));

  });

  it('HeventService should be defined', async () => {

    expect(heventService).toBeDefined();
  });

});