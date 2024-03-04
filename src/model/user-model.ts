import dbUsers from "../database/users.json"
import fs from "node:fs"


abstract class UserModel{
    static getAllUsers = ()=>{
        const users = dbUsers.users;
        return users;
    }
}

export default UserModel;