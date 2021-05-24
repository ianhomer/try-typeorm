# try-typeorm

Try TypeORM

## tl;dr

    npm install
    npm run migration
    npm start

## Creating a new typeorm project

    npm install -g typeorm
    typeorm init

## Creating migration scripts

Note that typeorm config has synchronize set to false so that we can explicitly
control migrations. When this option is true then the migrations occur on the
fly at runtime.

Starting with no migration scripts, create baseline for the model and run
migration

    npm run migration:generate -- -n baseline
    npm run migration

Make model change and then re-run migration

    npm run migration:generate -- -n change
    npm run migration

## Generate ERDs

    docker run -d -p 8080:8080 plantuml/plantuml-server:tomcat

## Thanks

- <https://stackoverflow.com/questions/52800204/typeorms-migrationgenerate-regenerates-the-whole-database-schema>
- <https://wanago.io/2019/01/28/typeorm-migrations-postgres/>
