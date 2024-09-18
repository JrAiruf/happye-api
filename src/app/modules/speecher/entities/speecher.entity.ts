import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Hevent } from '../../hevent/entities/hevent.entity';

@Entity('speechers')
export class Speecher {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    resume?: string
    @Column()
    about?: string
    @ManyToMany(() => Hevent)
    events?: Hevent[]
}