import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Speecher } from '../../speecher/entities/speecher.entity';
import { Auth } from '../../auth/entities/auth.entity';


@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 200 })
    fullName: string

    @Column({ length: 14, unique: true })
    phoneNumber: string

    @OneToOne(() => Speecher, { eager: true, cascade: true })
    @JoinColumn()
    speecher?: Speecher

    @OneToOne(() => Auth, (auth) => auth.user, { cascade: true })
    @JoinColumn()
    auth?: Auth
}