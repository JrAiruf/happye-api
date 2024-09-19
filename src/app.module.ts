import { Module } from '@nestjs/common';
import { HeventModule } from './app/modules/hevent/hevent.module';
import { SpeecherModule } from './app/modules/speecher/speecher.module';
import { UserModule } from './app/modules/user/user.module';

@Module({
  imports: [
    UserModule,
    HeventModule,
    SpeecherModule
  ],
})

export class AppModule { }
