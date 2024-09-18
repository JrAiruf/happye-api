import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hevent } from '../hevent/entities/hevent.entity';
import { Speecher } from '../speecher/entities/speecher.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: "localhost",
            port: 3306,
            username: "jradmin",
            password: "12345678",
            database: "happyeDb",
            entities: [
                Hevent,
                Speecher
            ],
            synchronize: true,
            logging: true,
            logger: 'advanced-console'
        })
    ]
})

export class DatabaseModule { }