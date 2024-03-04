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

}

export default UserController