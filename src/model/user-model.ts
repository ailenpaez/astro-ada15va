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
}

export default UserModel;
