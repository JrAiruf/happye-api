import { ApiProperty } from "@nestjs/swagger";
import { Speecher } from "../entities/speecher.entity";

export class CreateSpeecherDto extends Speecher {
    @ApiProperty({ example: "Resume example" })
    resume?: string;

    @ApiProperty({ example: "About example" })
    about?: string;
}
