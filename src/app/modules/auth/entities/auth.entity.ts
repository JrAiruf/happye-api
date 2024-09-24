import { User } from '../../user/entities/user.entity';
import { Credential } from './credential';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'auth' })
export class Auth {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 120, unique: true })
    email: string

    @Column({ length: 150 })
    password: string

    @Column('int')
    credential: Credential

    @OneToOne(() => User, (user) => user.auth, { eager: true })
    user?: User
    
}
