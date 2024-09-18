import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateHeventDto } from './dto/update-hevent.dto';
import { Hevent } from './entities/hevent.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HeventService {

  constructor(
    @InjectRepository(Hevent)
    private readonly repository: Repository<Hevent>
  ) {

  }

  async create(hevent: Hevent): Promise<Hevent> {
    try {
      const newHevent = this.repository.create(hevent);
      await this.repository.save(newHevent);

      return newHevent;
    } catch (error) {
      throw new BadRequestException('Hevent creation failed! Please verify the sended data.');
    }
  }

  async findAll(): Promise<Hevent[]> {
    return await this.repository.find({
      loadEagerRelations: false,
      order: {
        title: {
          direction: 'ASC'
        }
      }
    });
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
