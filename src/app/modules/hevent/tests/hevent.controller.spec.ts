import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Hevent } from '../entities/hevent.entity';
import { HeventService } from '../hevent.service';
import { HeventController } from '../hevent.controller';
import { BadRequestException } from '@nestjs/common';
import { invalidMockHevent, mockHevent } from './mocks/hevent.mocks';


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

  it('should be defined.', () => {
    expect(controller).toBeDefined();
  });

  describe('Create Hevent', () => {
    it('should to throw BadRequest for invalid data.', async () => {
      jest.spyOn(service, 'create').mockRejectedValue(new BadRequestException('Hevent creation failed! Please verify the sended data.'))

      await expect(controller.create(invalidMockHevent)).rejects.toThrow(new BadRequestException('Hevent creation failed! Please verify the sended data.'))
    })

    it('should return the brand new created Hevent.', async () => {
      jest.spyOn(repository, 'save').mockReturnValue(Promise.resolve(mockHevent));
      jest.spyOn(service, 'create').mockResolvedValue(Promise.resolve(mockHevent));

      const result = await controller.create(mockHevent);

      expect(result.title).toEqual(mockHevent.title);
      expect(result.description).toEqual(mockHevent.description);
      expect(result.speechers.length).toBeGreaterThanOrEqual(1);
    })
  })
});
