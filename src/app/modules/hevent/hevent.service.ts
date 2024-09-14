import { Injectable } from '@nestjs/common';
import { CreateHeventDto } from './dto/create-hevent.dto';
import { UpdateHeventDto } from './dto/update-hevent.dto';

@Injectable()
export class HeventService {
  create(createHeventDto: CreateHeventDto) {
    return 'This action adds a new hevent';
  }

  findAll() {
    return `This action returns all hevent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hevent`;
  }

  update(id: number, updateHeventDto: UpdateHeventDto) {
    return `This action updates a #${id} hevent`;
  }

  remove(id: number) {
    return `This action removes a #${id} hevent`;
  }
}
