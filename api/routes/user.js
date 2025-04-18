import express from "express";
import { getUsers,addUser,updateUser,deleteUser } from "../cotroller/user.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser); 

export default router;
