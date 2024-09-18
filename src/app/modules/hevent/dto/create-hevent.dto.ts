import { IsNotEmpty } from 'class-validator';
import { Hevent } from "../entities/hevent.entity";
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { CreateHeventSpeecherDto } from '../../speecher/dto/create-hevent-speecher.dto';

export class CreateHeventDto extends Hevent {
    @IsNotEmpty()
    @ApiProperty({ example: 'Hevent title' })
    title: string;

    @ApiProperty({ example: 'Hevent description' })
    description?: string;

    @IsNotEmpty()
    @ApiProperty({ example: 100 })
    amountOfPeople: number;

    @ApiProperty({ example: [randomUUID()] })
    speechers?: CreateHeventSpeecherDto[];
}
