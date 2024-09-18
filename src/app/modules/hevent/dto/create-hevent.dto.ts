import { IsNotEmpty } from 'class-validator';
import { Hevent } from "../entities/hevent.entity";
import { ApiProperty } from '@nestjs/swagger';
import { CreateHeventSpeecherDto } from '../../speecher/dto/create-hevent-speecher.dto';

export class CreateHeventDto extends Hevent {
    @IsNotEmpty()
    @ApiProperty({ example: 'Hevent title' })
    title: string;

    @ApiProperty({ example: 'Hevent local' })
    local: string;

    @ApiProperty({ example: 'Hevent description' })
    description?: string;

    @ApiProperty({ example: 'https://urlimage' })
    urlImage?: string;

    @ApiProperty({ example: '2024-01-01T09:00:00' })
    @IsNotEmpty()
    eventDate: Date;

    @ApiProperty({ example: '2024-01-01T09:00:00' })
    @IsNotEmpty()
    eventHour: Date;

    @IsNotEmpty()
    @ApiProperty({ example: 100 })
    amountOfPeople: number;

    @ApiProperty({ type: () => CreateHeventSpeecherDto, isArray: true })
    speechers?: CreateHeventSpeecherDto[];
}
