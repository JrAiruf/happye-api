import { Module } from '@nestjs/common';
import { HeventModule } from './app/modules/hevent/hevent.module';
import { SpeecherModule } from './app/modules/speecher/speecher.module';

@Module({
  imports: [
    HeventModule,
    SpeecherModule
  ],
})

export class AppModule { }
