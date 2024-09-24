import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CommonModule } from '../common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuthModule } from '../auth/auth.module';
import { Auth } from '../auth/entities/auth.entity';

@Module({
  imports: [
    CommonModule,
    AuthModule,
    TypeOrmModule.forFeature([Auth, User])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
