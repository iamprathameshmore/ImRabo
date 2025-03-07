import { Router } from "express";

import emailLogInController from "../controllers/auth/emailLogInController.js";

const AuthRouter = Router()

AuthRouter.post('/log-in',emailLogInController)

export default AuthRouter;