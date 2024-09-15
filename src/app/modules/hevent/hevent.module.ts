import { Module } from '@nestjs/common';
import { HeventService } from './hevent.service';
import { HeventController } from './hevent.controller';
import { CommonModule } from '../common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hevent } from './entities/hevent.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hevent]),
    CommonModule
  ],
  controllers: [HeventController],
  providers: [HeventService],
})
export class HeventModule { }
