import { v4 as uuidv4 } from 'uuid';
import { Hevent } from '../../entities/hevent.entity';

export const heventId = uuidv4();
// const speecherId = uuidv4();

export const invalidMockHevent: Hevent = {
    id: uuidv4(),
    title: "",
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
            events: []
        }
    ]
};

export const mockHevent: Hevent = {
    id: heventId,
    title: "Tech Conference 2024",
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
            events: []
        },
        {
            id: uuidv4(),
            resume: "Cloud Computing Specialist with 15 years of industry experience.",
            about: "Jane Smith has worked on major cloud platforms and helped scale enterprise systems.",
            events: []
        }
    ]
};

/* 
const mockSpeecher: Speecher = {
    id: speecherId,
    resume: "Expert in cybersecurity and ethical hacking.",
    about: "Alice Johnson has been working in cybersecurity for over 10 years and frequently speaks at global conferences.",
    events: [] // This can include related Hevent objects.
};
 */