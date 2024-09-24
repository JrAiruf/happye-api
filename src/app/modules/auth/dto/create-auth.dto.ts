import { ApiProperty } from "@nestjs/swagger";
import { Auth } from "../entities/auth.entity";
import { IsEmail, IsEnum, IsStrongPassword } from "class-validator";
import { Credential } from "../entities/credential";
import { CreateUserDto } from "../../user/dto/create-user.dto";

export class CreateAuthDto extends Auth {

    @ApiProperty({ example: "myemail@email.com" })
    @IsEmail()
    email: string;

    @ApiProperty({ example: "mystrongPassword!" })
    @IsStrongPassword()
    password: string;

    @ApiProperty({ example: 1 })
    @IsEnum({ Credential })
    credential: Credential;

    user?: CreateUserDto;
}
