import { PartialType } from '@nestjs/mapped-types';
import { CreateHeventSpeecherDto } from './create-hevent-speecher.dto';

export class UpdateSpeecherDto extends PartialType(CreateHeventSpeecherDto) { }
