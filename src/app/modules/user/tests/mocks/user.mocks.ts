import { randomUUID } from "crypto";
import { User } from "../../entities/user.entity";
import { Speecher } from "src/app/modules/speecher/entities/speecher.entity";
import { Credential } from "../../../auth/entities/credential";

const userId = randomUUID();

export const invalidMockUser: User = {
    id: 'b7d81f7c-2c8b-4ae4-8444-df835b3dc580',
    fullName: '',
    phoneNumber: '',
    speecher: undefined,
    auth: {
        id: randomUUID(),
        email: "myemail",
        password: "mypassword",
        credential: Credential.user,
    }
};

export const mockUser: User = {
    id: userId,
    fullName: 'John Doe',
    phoneNumber: '12345678901234',
    speecher: {
        id: randomUUID(),
        resume: '10 years of public speaking experience',
        about: 'Passionate about communication and leadership.',
        user: {
            id: userId,
            fullName: "Full Username",
            phoneNumber: "55084388273829"
        }
    }
};

export const mockSpeecher: Speecher = {
    id: randomUUID(),
    resume: 'Experienced motivational speaker.',
    about: 'Focused on personal development and leadership training.',
    user: {
        id: randomUUID(),
        fullName: 'Jane Doe',
        phoneNumber: '98765432109876',
        auth: {
            id: randomUUID(),
            email: "myemail",
            password: "mypassword",
            credential: Credential.user,
        }
    }
};

export const mockUserRepository = {
    save: jest.fn().mockResolvedValue(mockUser),
    create: jest.fn().mockReturnValue(mockUser),
};
