import { v4 as uuidv4 } from 'uuid';
import { Hevent } from '../../entities/hevent.entity';
import { randomUUID } from 'crypto';
import { Credential } from "../../../auth/entities/credential";
import { User } from '../../../user/entities/user.entity';

export const heventId = uuidv4();

export const invalidMockHevent: Hevent = {
    id: uuidv4(),
    title: "",
    local: "",
    urlImage: "https://example.com/invalid-event.jpg",
    description: "This event has invalid data.",
    eventDate: new Date('2023-01-01'),
    eventHour: new Date('2023-01-01T09:00:00'),
    amountOfPeople: -10,
    speechers: [
        {
            id: uuidv4(),
            resume: "Speaker with invalid event.",
            about: "This speaker is associated with an invalid event.",
            events: [],
            user: {
                id: randomUUID(),
                fullName: "User Name",
                phoneNumber: "55038998809616",
                auth: {
                    id: randomUUID(),
                    email: "myemail",
                    password: "mypassword",
                    credential: Credential.user,
                    user: new User()
                }
            }
        },
    ]
};

export const mockHevent: Hevent = {
    id: heventId,
    title: "Tech Conference 2024",
    local: "Minas Gerais",
    urlImage: "https://example.com/tech-conference-2024.jpg",
    description: "A technology conference bringing together leaders in AI, Cloud Computing, and IoT.",
    eventDate: new Date('2024-10-10'),
    eventHour: new Date('2024-10-10T09:00:00'),
    amountOfPeople: 500,
    speechers: [
        {
            id: uuidv4(),
            resume: "PhD in Computer Science and AI expert.",
            about: "John Doe is a leading researcher in AI with over 20 years of experience.",
            events: [],
            user: {
                id: randomUUID(),
                fullName: "User Name",
                phoneNumber: "55038998809616",
                auth: {
                    id: randomUUID(),
                    email: "myemail",
                    password: "mypassword",
                    credential: Credential.user,
                    user: new User()
                }
            }
        },
        {
            id: uuidv4(),
            resume: "Cloud Computing Specialist with 15 years of industry experience.",
            about: "Jane Smith has worked on major cloud platforms and helped scale enterprise systems.",
            events: [],
            user: {
                id: randomUUID(),
                fullName: "User Name",
                phoneNumber: "55038998809616",
                auth: {
                    id: randomUUID(),
                    email: "myemail",
                    password: "mypassword",
                    credential: Credential.user,
                    user: new User()
                }
            }
        }
    ]
};
