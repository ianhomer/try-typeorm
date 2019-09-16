import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'sqlite',
    database: "./data/db.sqlite",
    entities: [
        __dirname + '/entity/*{.ts,.js}',
    ],
    cli: {
        migrationsDir: 'src/migrations',
    }
};

console.log(`Entities : ${config.entities}`)

export = config;