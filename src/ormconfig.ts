import { DataSourceOptions } from "typeorm";

const connection = "postgres";

const entities = [__dirname + "/entity/*{.ts,.js}"];
const migrations = [__dirname + "/migration/*{.ts,.js}"];

let config: DataSourceOptions;

if (connection == "postgres") {
  config = {
    type: "postgres",
    database: "dojo",
    username: "dojo",
    password: "password",
    synchronize: true,
    entities
  };
} else {
  config = {
    type: "sqlite",
    database: "./data/db.sqlite",
    synchronize: false,
    entities,
    migrations
  };
}

console.log(`Entities : ${config.entities}`);

export = config;
