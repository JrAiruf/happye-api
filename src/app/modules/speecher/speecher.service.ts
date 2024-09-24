import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateSpeecherDto } from './dto/update-speecher.dto';
import { Speecher } from './entities/speecher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';

@Injectable()
export class SpeecherService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Speecher)
    private readonly speecherRepository: Repository<Speecher>
  ) {

  }
  async create(dto: Speecher): Promise<Speecher> {
    try {
      const user = await this.userRepository.findOne({
        where: { id: dto.user.id }
      })
      if (!user) {
        throw new NotFoundException(`User not found. Id: ${dto.user.id}`);
      }
      const newSpeecher = await this.speecherRepository.create(dto);
      return await this.speecherRepository.save(newSpeecher);

    } catch (error) {
      throw new BadRequestException('Speecher creation failed! Please verify the sended data.');
    }
  }

  async findAll(): Promise<Speecher[]> {
    return await this.speecherRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} speecher`;
  }

  update(id: number, updateSpeecherDto: UpdateSpeecherDto) {
    return `This action updates a #${id} speecher`;
  }

  remove(id: number) {
    return `This action removes a #${id} speecher`;
  }
}
