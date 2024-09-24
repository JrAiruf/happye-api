import { Module } from '@nestjs/common';
import { HeventModule } from './app/modules/hevent/hevent.module';
import { SpeecherModule } from './app/modules/speecher/speecher.module';
import { UserModule } from './app/modules/user/user.module';
import { AuthModule } from './app/modules/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    HeventModule,
    SpeecherModule
  ],
})

export class AppModule { }
