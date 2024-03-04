import {Request, Response} from "express";
import crypto from "node:crypto"
import UserModel from "../model/user-model";

abstract class UserController {
   static getAllUsers = (req: Request, res: Response) =>{
   //  const querys = req.query;

    const users = UserModel.getAllUsers();
    if(!users) return res.status(500).json({error: "Server Error"})
   res.json(users)
   }

   static getUserById = (req:Request, res:Response) => {
      const { id } = req.params;
       const user = UserModel.getUserById(id);
       if(!user) return res.status(404).json({ error: "Server Error" });
      res.json(user);
   }

}

export default UserController