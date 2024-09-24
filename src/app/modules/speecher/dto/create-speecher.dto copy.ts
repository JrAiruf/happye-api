import { ApiProperty } from "@nestjs/swagger";
import { Speecher } from "../entities/speecher.entity";
import { UserDto } from "../../user/dto/user.dto";

export class CreateSpeecherDto extends Speecher {
    @ApiProperty({ example: "Resume example" })
    resume?: string;

    @ApiProperty({ example: "About example" })
    about?: string;

    @ApiProperty({ type: () => UserDto })
    user: UserDto;
}
