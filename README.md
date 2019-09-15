# try-typeorm

Try TypeORM

# tl;dr

    npm start
    
# How was this project created

    npm install -g typeorm
    typeorm init
    
# Creating migration scripts

Starting with no migration scripts, create baseline for the model:

    ts-node ./node_modules/typeorm/cli.js migration:generate -n baseline

Run migration

    npm run migration:run

Make model change and then run
                      
    ts-node ./node_modules/typeorm/cli.js migration:generate -n change    

# Thanks

* https://stackoverflow.com/questions/52800204/typeorms-migrationgenerate-regenerates-the-whole-database-schema