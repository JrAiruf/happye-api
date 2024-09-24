import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';
import { AuthHashService } from './auth.hash.service/auth.hash.service';
@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,
    private readonly hashService: AuthHashService
  ) {

  }

  async login(dto: Auth): Promise<Auth> {
    try {
      const currentCredential = await this.authRepository.findOne({
        where: {
          email: dto.email
        }
      })
      console.log(currentCredential);
      
      if (!currentCredential) {
        throw new UnauthorizedException('Something went wrong. Verify your data. 1');
      }
      const validCredential = await this.hashService.validateHash(dto.password);
      if (!validCredential) {
        throw new UnauthorizedException('Something went wrong. Verify your data. 2');
      }
      return currentCredential;
    } catch (error) {
      throw new UnauthorizedException(`Something went wrong. Verify your data. 3 ${error}`);
    }
  }

  async findAll(): Promise<Auth[]> {
    return await this.authRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
