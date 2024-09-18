import { ApiProperty } from "@nestjs/swagger";
import { Speecher } from "../entities/speecher.entity";
import { randomUUID } from "crypto";
import { IsNotEmpty } from "class-validator";

export class CreateHeventSpeecherDto extends Speecher {

    @ApiProperty({ example: randomUUID() })
    @IsNotEmpty()
    id: string;

    @ApiProperty({ example: "Resume example" })
    resume?: string;

    @ApiProperty({ example: "About example" })
    about?: string;
}
