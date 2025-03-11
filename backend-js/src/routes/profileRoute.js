import { Router } from "express";
import emailLogInController from "../controllers/auth/emailLogInController.js";


const ProfileRoute = Router();

ProfileRoute.post("/Profile",validateEmailLogin, emailLogInController);

export default ProfileRoute;

