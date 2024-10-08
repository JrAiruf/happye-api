import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hevent } from '../hevent/entities/hevent.entity';
import { Speecher } from '../speecher/entities/speecher.entity';
import { User } from '../user/entities/user.entity';
import { Auth } from '../auth/entities/auth.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.HOST,
            port: Number.parseInt(process.env.DBPORT),
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            entities: [
                Auth,
                User,
                Hevent,
                Speecher
            ],
            synchronize: Boolean(process.env.DATABASE_SYNC),
            logging: true,
            logger: 'advanced-console'
        })
    ]
})

export class DatabaseModule { }