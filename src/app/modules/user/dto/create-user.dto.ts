import { ApiProperty } from "@nestjs/swagger";
import { User } from "../entities/user.entity";
import { CreateSpeecherDto } from "../../speecher/dto/create-speecher.dto copy";
import { CreateAuthDto } from "../../auth/dto/create-auth.dto";

export class CreateUserDto extends User {

    @ApiProperty({ example: 'User Name' })
    fullName: string;

    @ApiProperty({ example: '55011344443322' })
    phoneNumber: string;

    @ApiProperty({ type: () => CreateSpeecherDto })
    speecher?: CreateSpeecherDto;

    @ApiProperty({ type: () => CreateAuthDto })
    auth: CreateAuthDto;
}
