import { Speecher } from '../../speecher/entities/speecher.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable
} from 'typeorm';

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
    amountOfPeople: number
    @ManyToMany(() => Speecher, { cascade: true })
    @JoinTable()
    speechers?: Speecher[]
}
