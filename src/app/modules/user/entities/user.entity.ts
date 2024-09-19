import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToMany } from 'typeorm';
import { Speecher } from '../../speecher/entities/speecher.entity';


@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 200 })
    fullName: string

    @Column({ length: 14 })
    phoneNumber: string

    @OneToOne(() => Speecher, { eager: true, cascade: true })
    speecher?: Speecher
}
