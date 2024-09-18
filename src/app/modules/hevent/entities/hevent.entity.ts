import { Speecher } from '../../speecher/entities/speecher.entity';
import {
    Entity,
    Column,
    CreateDateColumn,
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
    @CreateDateColumn({ generated: true })
    eventDate: Date
    @CreateDateColumn({ generated: true })
    eventHour: Date
    @Column()
    amountOfPeople: number
    @ManyToMany(() => Speecher, { cascade: true })
    @JoinTable()
    speechers?: Speecher[]
}
