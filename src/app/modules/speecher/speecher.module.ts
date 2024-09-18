import { Module } from '@nestjs/common';
import { SpeecherService } from './speecher.service';
import { SpeecherController } from './speecher.controller';
import { CommonModule } from '../common/common.module';

@Module({
  imports:[
    CommonModule
  ],
  controllers: [SpeecherController],
  providers: [SpeecherService],
})
export class SpeecherModule {}
