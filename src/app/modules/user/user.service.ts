import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { AuthHashService } from '../auth/auth.hash.service/auth.hash.service';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly hashService: AuthHashService
  ) {

  }

  async create(dto: User): Promise<User> {
    try {
      dto.auth.password = await this.hashService.hashValue(dto.auth.password);
      console.log(dto.auth.password);
      const newUser = await this.userRepository.create(dto);
      await this.userRepository.save(newUser);
      return newUser;
    } catch (error) {
      throw new BadRequestException('Error during register. Please, verify the sended data');
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
