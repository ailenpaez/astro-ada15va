import { Router } from "express";
import UserController from "../controller/user-controller";


const userRouter = Router();

// GET
userRouter.get("/", UserController.getAllUsers);

userRouter.get("/:id", UserController.getUserById);

// POST
userRouter.post('/', UserController.createUser);

// // PATCH
// userRouter.patch('/user/:id', UserController.updateUser);

// // DELETE
// userRouter.delete('/user/:id', UserController.deleteUser);

export default userRouter;