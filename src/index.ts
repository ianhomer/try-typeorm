import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Group} from "./entity/Group";

const seconds = Math.floor(new Date().getTime() / 1000)

createConnection().then(async connection => {

    console.log(`${seconds} : Inserting a new user into the database...`);
    const user = new User();
    user.name = "my-name-" + seconds;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    const group = new Group();
    group.name = "my-group-" + seconds;
    await connection.manager.save(group);

    await connection.createQueryBuilder()
        .relation(Group, "users")
        .of(group).add(user);

    const groups = await connection.manager.find(Group);
    console.log("Loaded groups: ", groups);


}).catch(error => console.log(error));
