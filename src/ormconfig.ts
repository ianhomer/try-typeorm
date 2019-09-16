import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'sqlite',
    database: "./data/db.sqlite",
    synchronize: false,
    entities: [
        __dirname + '/entity/*{.ts,.js}',
    ],
    migrations: [
        __dirname + '/migration/*{.ts,.js}',
    ],
    cli: {
        entitiesDir: "src/entity",
        migrationsDir: 'src/migration'
    }
};

console.log(`Entities : ${config.entities}`)

export = config;