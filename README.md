# try-typeorm

Try TypeORM

# tl;dr

    npm run migration
    npm start
    
# How was this project created

    npm install -g typeorm
    typeorm init
    
# Creating migration scripts

Starting with no migration scripts, create baseline for the model:

    ts-node ./node_modules/typeorm/cli.js migration:generate -n baseline

Run migration

    npm run migration

Make model change and then run
                      
    typeorm migration:generate -n change
    npm run typeorm:cli migration:generate -- -n change

# Thanks

* https://stackoverflow.com/questions/52800204/typeorms-migrationgenerate-regenerates-the-whole-database-schema
* https://wanago.io/2019/01/28/typeorm-migrations-postgres/