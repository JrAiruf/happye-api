import { Injectable } from '@nestjs/common';
import { CreateSpeecherDto } from './dto/create-speecher.dto';
import { UpdateSpeecherDto } from './dto/update-speecher.dto';

@Injectable()
export class SpeecherService {
  create(createSpeecherDto: CreateSpeecherDto) {
    return 'This action adds a new speecher';
  }

  findAll() {
    return `Speechers Controller works!`;
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
