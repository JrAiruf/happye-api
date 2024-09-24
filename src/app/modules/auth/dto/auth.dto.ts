import { ApiProperty } from "@nestjs/swagger";
import { Auth } from "../entities/auth.entity";
import { IsEmail, IsStrongPassword } from "class-validator";

export class AuthDto extends Auth {
    @ApiProperty({ example: "myemail@email.com" })
    @IsEmail()
    email: string;

    @ApiProperty({ example: "mystrongPassword!" })
    @IsStrongPassword()
    password: string;

    token: string
}