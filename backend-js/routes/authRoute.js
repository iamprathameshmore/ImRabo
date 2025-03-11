import { Router } from "express";

import emailLogInController from "../controllers/auth/emailLogInController.js";
import emailSignUpController from "../controllers/auth/emailSignUpController.js";
import emailVerificationController from "../controllers/auth/emailVerifictionController.js";

const AuthRouter = Router()

AuthRouter.post('/log-in',emailLogInController)
AuthRouter.post('/sign-up',emailSignUpController)
AuthRouter.post('/verify',emailVerificationController)

export default AuthRouter;