import { Speecher } from '../../speecher/entities/speecher.entity';
import {
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable
} from 'typeorm';

@Entity('hevent')
export class Hevent {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    local: string

    @Column()
    urlImage?: string

    @Column()
    description?: string

    @CreateDateColumn()
    eventDate: Date

    @CreateDateColumn()
    eventHour: Date

    @Column()
    amountOfPeople: number

    @ManyToMany(() => Speecher, { eager: true, cascade: true })
    @JoinTable()
    speechers?: Speecher[]
}
