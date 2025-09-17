import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controller.js";

const router = express.Router();

// console.log(registerUser, "<><><>line 6<><><>")

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
