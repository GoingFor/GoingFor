import express, { Router } from 'express';
import { facebook, google, instagram, twitter, signOut, signin, signup } from '../controllers/auth.controller.js';

/* VARIABELN */
const authRouter = Router();


// Register
// http://localhost:3002/api/auth/signup
authRouter
    .post("/signup", signup);

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
    .get('/signout', signOut)


//Event
// http://localhost:3002/api/events
// router.get('/api/events', signOut)


export default authRouter;


