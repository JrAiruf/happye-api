import { Module } from '@nestjs/common';
import { HeventModule } from './app/modules/hevent/hevent.module';

@Module({
  imports: [
    HeventModule
  ],
})

export class AppModule { }
