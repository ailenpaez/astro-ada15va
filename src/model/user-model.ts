import dbUsers from "../database/users.json";
import fs from "node:fs";

abstract class UserModel {
  static getAllUsers = () => {
    const users = dbUsers.users;
    return users;
  };

  static getUserById = (id: string) => {
    const user = dbUsers.users.find((user: any) => user.id === id);
    return user;
  };

  static createUser = (newUser: any) => {
    dbUsers.users.push(newUser);
    try {
      fs.writeFileSync("./src/database/users.json", JSON.stringify(dbUsers));
    } catch (error) {
      return new Error();
    }
    return newUser;
  };
}

export default UserModel;
