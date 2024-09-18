import { Test } from '@nestjs/testing';
import { HeventService } from '../hevent.service';
import { Hevent } from '../entities/hevent.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BadRequestException } from '@nestjs/common';
import { heventId, invalidMockHevent, mockHevent } from './mocks/hevent.mocks';

describe('heventService', () => {
  let heventService: HeventService;
  let repository: Repository<Hevent>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        HeventService,
        {
          provide: getRepositoryToken(Hevent),
          useClass: Repository
        }
      ],
    }).compile();

    heventService = module.get<HeventService>(HeventService);
    repository = module.get(getRepositoryToken(Hevent));

  });

  it('HeventService should be defined', async () => {

    expect(heventService).toBeDefined();
  });

  describe('Create hevent', () => {

    it('should to throw BadRequestException due failure on creation ', async () => {
      jest.spyOn(repository, 'create').mockReturnValue(null);
      await expect(heventService.create(invalidMockHevent)).rejects.toThrow(new BadRequestException('Hevent creation failed! Please verify the sended data.'));
    })

    it('should return a new Hevent', async () => {
      jest.spyOn(repository, 'create').mockReturnValue(mockHevent);
      jest.spyOn(repository, 'save').mockReturnValue(Promise.resolve(mockHevent));
      jest.spyOn(repository, 'findOne').mockReturnValue(Promise.resolve(mockHevent));

      const result = await heventService.create(mockHevent);

      expect(result.id).toEqual(mockHevent.id);
      expect(result.title).toEqual(mockHevent.title);
      expect(result.description).toEqual(mockHevent.description);
    })
  })

});