/** EXTERNE DEPENDENCIES */
import express, { Router } from 'express';

/** IMPORTS */
import { facebook, google, instagram, twitter, signOut, signin, signup } from '../controllers/authController.js';
import { signupValidation } from '../validation/userValidation.js';
import { verifyToken } from '../utils/verifyUser.js';

/* VARIABELN */
const authRouter = Router();


// Register
// http://localhost:3002/api/auth/signup
authRouter
    .post("/signup", 
        signupValidation,
        signup);

// Login
// http://localhost:3002/api/auth/signin
authRouter
    .post("/signin", signin);

//Login Google
// http://localhost:3002/api/auth/google
authRouter
    .post('/google', google);
//Login facebook
// http://localhost:3002/api/auth/facebook
authRouter
    .post('/facebook', facebook);
//Login twitter
// http://localhost:3002/api/auth/twitter
authRouter
    .post('/twitter', twitter);
//Login instagram
// http://localhost:3002/api/auth/instagram
authRouter
    .post('/instagram', instagram);

//Signout
// http://localhost:3002/api/auth/signout
authRouter
    .post('/signout', 
        verifyToken,
        signOut)



export default authRouter;


