import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('events')
export class Hevent {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    title: string
    @Column()
    urlImage?: string
    @Column()
    description?: string
    @Column({ type: 'date' })
    eventDate: Date
    @Column({ type: 'datetime' })
    eventHour: Date
    @Column()
    amountOfPeople?: number
}
