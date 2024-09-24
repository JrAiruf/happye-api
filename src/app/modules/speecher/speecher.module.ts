import { Module } from '@nestjs/common';
import { SpeecherService } from './speecher.service';
import { SpeecherController } from './speecher.controller';
import { CommonModule } from '../common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Speecher } from './entities/speecher.entity';
import { User } from '../user/entities/user.entity';
import { Batch } from '../hevent/entities/batch.entity';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([User, Speecher, Batch])
  ],
  controllers: [SpeecherController],
  providers: [SpeecherService],
})
export class SpeecherModule { }
