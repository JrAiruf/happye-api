import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { invalidMockUser, mockUser, mockUserRepository } from './mocks/user.mocks';
import { BadRequestException } from '@nestjs/common';

describe('UserService', () => {
  let service: UserService;
  let repository: Repository<User>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository
        }
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get(getRepositoryToken(User))

    jest.spyOn(repository, 'create').mockReset();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Create User', () => {
    it('should to throw BadRequestException due creation failure.', async () => {
    expect(repository.save).not.toHaveBeenCalled();
  })

  it('should return a new user.', async () => {
    jest.spyOn(repository, 'create').mockReturnValue(mockUser);
    const result = await service.create(mockUser);
    expect(result.id).toBeDefined();
    expect(result.fullName).toBe(mockUser.fullName);
  })
})
});
