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
        
        
    typeorm migration:generate -n baseline

    typeorm schema:sync

    typeorm migration:create -n baseline
    
