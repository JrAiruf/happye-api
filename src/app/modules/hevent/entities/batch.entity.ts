import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Hevent } from './hevent.entity';

@Entity('batches')
export class Batch {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 100 })
    name: string;

    @CreateDateColumn()
    initialDate: Date;

    @CreateDateColumn()
    endDate: Date;

    @Column({ type: 'decimal' })
    price: number;

    @Column()
    availableAmount: number;

    @OneToMany(() => Hevent, (hevent) => hevent.batches)
    hevent: Hevent
}