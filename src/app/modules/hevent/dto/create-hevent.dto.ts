import { IsNotEmpty } from 'class-validator';
import { Hevent } from "../entities/hevent.entity";
import { ApiProperty } from '@nestjs/swagger';
import { CreateHeventSpeecherDto } from '../../speecher/dto/create-hevent-speecher.dto';

export class CreateHeventDto extends Hevent {
    @IsNotEmpty()
    @ApiProperty({ example: 'Hevent title' })
    title: string;

    @ApiProperty({ example: 'Hevent description' })
    description?: string;

    @ApiProperty({ example: 'https://urlimage' })
    urlImage?: string;

    @ApiProperty({ example: 'dd-mm-yyyy' })
    @IsNotEmpty()
    eventDate: Date;

    @ApiProperty({ example: 'dd-mm-yyyyThh:mm:ss' })
    @IsNotEmpty()
    eventHour: Date;

    @IsNotEmpty()
    @ApiProperty({ example: 100 })
    amountOfPeople: number;

    @ApiProperty({ example: [] })
    speechers?: CreateHeventSpeecherDto[];
}
