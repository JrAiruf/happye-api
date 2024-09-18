import { IsNotEmpty } from 'class-validator';
import { Hevent } from "../entities/hevent.entity";
import { ApiProperty } from '@nestjs/swagger';
import { Speecher } from '../../speecher/entities/speecher.entity';
import { randomUUID } from 'crypto';

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
    speechers?: Speecher[];
}
