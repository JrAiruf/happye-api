import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToOne } from 'typeorm';
import { Hevent } from '../../hevent/entities/hevent.entity';
import { User } from '../../user/entities/user.entity';

@Entity('speechers')
export class Speecher {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    resume?: string

    @Column()
    about?: string

    @Column({ nullable: true })
    urlImage?: string

    @ManyToMany(() => Hevent)
    events?: Hevent[]

    @OneToOne(() => User)
    user: User
}