import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CommonModule } from '../common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { AuthHashService } from './auth.hash.service/auth.hash.service';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([Auth])
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthHashService
  ],
  exports: [
    AuthHashService
  ]
})
export class AuthModule { }
