import { Request, Response } from "express";
import crypto from "node:crypto";
import UserModel from "../model/user-model";
import { validateUser, validatePartialUser } from "../validator/validatorUsers";


abstract class UserController {
  static getAllUsers = (req: Request, res: Response) => {

    const users = UserModel.getAllUsers();
    if (!users) return res.status(500).json({ error: "Server Error" });
    res.json(users);
  };

  static getUserById = (req: Request, res: Response) => {
    const { id } = req.params;
    const user = UserModel.getUserById(id);
    if (!user) return res.status(404).json({ error: "Server Error" });
    res.json(user);
  };

  static createUser = async (req: Request, res: Response) => {

   const responseValidator = validateUser(req.body);
 
   if (!responseValidator.success) {
     return res.status(400).send(responseValidator.error);
   }
 
    const { name, email } = req.body;
 
    const id = crypto.randomUUID();
 
    const newUser = {
      id,
      name,
      email,
    };
 
    try {
      const createdUser = UserModel.createUser(newUser);
      return res.json(createdUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error creating user in the database" });
    }
  };
 
}

export default UserController;
