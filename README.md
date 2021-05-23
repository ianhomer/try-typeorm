# try-typeorm

Try TypeORM

## tl;dr

    npm run migration
    npm start

## How was this project created

    npm install -g typeorm
    typeorm init

## Creating migration scripts

Note that typeorm config has synchronize set to false so that we can explicitly
control migrations. When this option is true then the migrations are done on the
fly at runtime.

Starting with no migration scripts, create baseline for the model and run
migration

    npm run migration:generate -- -n baseline
    npm run migration

Make model change and then re-run migration

    npm run migration:generate -- -n change
    npm run migration

## Thanks

* <https://stackoverflow.com/questions/52800204/typeorms-migrationgenerate-regenerates-the-whole-database-schema>
* <https://wanago.io/2019/01/28/typeorm-migrations-postgres/>
