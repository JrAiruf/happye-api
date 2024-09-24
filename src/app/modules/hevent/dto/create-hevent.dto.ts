import { IsNotEmpty } from 'class-validator';
import { Hevent } from "../entities/hevent.entity";
import { ApiProperty } from '@nestjs/swagger';
import { CreateHeventSpeecherDto } from '../../speecher/dto/create-hevent-speecher.dto';
import { CreateBatchDto } from './create-batch.dto';

export class CreateHeventDto extends Hevent {
    @IsNotEmpty()
    @ApiProperty({ example: 'Hevent title' })
    title: string;

    @IsNotEmpty()
    @ApiProperty({ example: 'Hevent local' })
    local: string;

    @ApiProperty({ example: 'Hevent description' })
    description?: string;

    @ApiProperty({ example: 'https://urlimage' })
    urlImage?: string;

    @IsNotEmpty()
    @ApiProperty({ example: '2024-01-01T09:00:00' })
    eventDate: Date;

    @IsNotEmpty()
    @ApiProperty({ example: '2024-01-01T09:00:00' })
    eventHour: Date;

    @ApiProperty({ example: 100 })
    @IsNotEmpty()
    amountOfPeople: number;

    @ApiProperty({ type: () => CreateHeventSpeecherDto, isArray: true })
    speechers: CreateHeventSpeecherDto[];

    @ApiProperty({ type: () => CreateBatchDto, isArray: true })
    batches?: CreateBatchDto[];
}
