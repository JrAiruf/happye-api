import { DataSource } from 'typeorm';

export const databaseProvider = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: process.env["HOST"],
                port: Number.parseInt(process.env["DBPORT"]),
                username: process.env["USERNAME"],
                password: process.env["PASSWORD"],
                database: process.env["DATABASE"],
                entities: [],
                synchronize: Boolean(process.env["DATABASE_SYNC"]),
            });

            return dataSource.initialize();
        },
    },
];
