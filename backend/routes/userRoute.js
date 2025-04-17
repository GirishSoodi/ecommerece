import express from 'express';
import {
  loginUser,
  registerUser,
  adminLogin,
  googleAuthUser, // ✅ New controller
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin);
userRouter.post('/google-auth', googleAuthUser); // ✅ New route

export default userRouter;
