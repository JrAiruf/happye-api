import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Hevent } from '../entities/hevent.entity';
import { HeventService } from '../hevent.service';
import { HeventController } from '../hevent.controller';


describe('HeventController', () => {
    let repository: Repository<Hevent>
    let service: HeventService;
    let controller: HeventController;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [HeventController],
        providers: [
          HeventService,
          {
            provide: getRepositoryToken(Hevent),
            useClass: Repository
          }
  
        ],
      }).compile();
  
      repository = module.get(getRepositoryToken(Hevent))
      service = module.get<HeventService>(HeventService);
      controller = module.get<HeventController>(HeventController);
    });
  
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
  });
  