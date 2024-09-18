import { Injectable } from '@nestjs/common';
import { CreateSpeecherDto } from './dto/create-speecher.dto';
import { UpdateSpeecherDto } from './dto/update-speecher.dto';
import { Speecher } from './entities/speecher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SpeecherService {

  constructor(@InjectRepository(Speecher) private readonly speecherRepository: Repository<Speecher>) {

  }
  create(createSpeecherDto: CreateSpeecherDto) {
    return 'This action adds a new speecher';
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
