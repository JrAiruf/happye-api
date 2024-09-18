import { PartialType } from '@nestjs/mapped-types';
import { CreateSpeecherDto } from './create-speecher.dto';

export class UpdateSpeecherDto extends PartialType(CreateSpeecherDto) {}
