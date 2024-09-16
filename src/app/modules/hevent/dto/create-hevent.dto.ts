import { IsNotEmpty } from 'class-validator';
import { Hevent } from "../entities/hevent.entity";

export class CreateHeventDto extends Hevent {
    @IsNotEmpty()
    title: string;
    description?: string;

    @IsNotEmpty()
    amountOfPeople: number;
}
