import { Module } from '@nestjs/common';
import { HeventService } from './hevent.service';
import { HeventController } from './hevent.controller';

@Module({
  controllers: [HeventController],
  providers: [HeventService],
})
export class HeventModule {}
