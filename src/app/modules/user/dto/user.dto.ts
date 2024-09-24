import { ApiProperty } from "@nestjs/swagger";
import { User } from "../entities/user.entity";
import { CreateSpeecherDto } from "../../speecher/dto/create-speecher.dto copy";
import { randomUUID } from "crypto";

export class UserDto extends User {
    @ApiProperty({ example: randomUUID() })
    id: string

    @ApiProperty({ example: 'User Name' })
    fullName: string;

    @ApiProperty({ example: '55011344443322' })
    phoneNumber: string;

    @ApiProperty({ type: () => CreateSpeecherDto })
    speecher: CreateSpeecherDto;
}
