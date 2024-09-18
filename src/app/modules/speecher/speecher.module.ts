import { Module } from '@nestjs/common';
import { SpeecherService } from './speecher.service';
import { SpeecherController } from './speecher.controller';
import { CommonModule } from '../common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Speecher } from './entities/speecher.entity';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([Speecher])
  ],
  controllers: [SpeecherController],
  providers: [SpeecherService],
})
export class SpeecherModule { }
