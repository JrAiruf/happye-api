import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Speecher } from '../../speecher/entities/speecher.entity';


@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 200 })
    fullName: string

    @Column({ length: 14 })
    phoneNumber: string

    @OneToOne(() => Speecher,
        {
            cascade: true,
        },
    )
    @JoinColumn()
    speecher?: Speecher
}