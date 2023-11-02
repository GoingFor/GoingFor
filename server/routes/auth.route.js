import express from 'express';
import { facebook, google, instagram, twitter, signOut, signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();


// Register
// http://localhost:3002/api/auth/signup
router.post("/signup", signup);
// Login
// http://localhost:3002/api/auth/signin
router.post("/signin", signin);
//Login Google
// http://localhost:3002/api/auth/google
router.post('/google', google);
//Login facebook
// http://localhost:3002/api/auth/facebook
router.post('/facebook', facebook);
//Login twitter
// http://localhost:3002/api/auth/twitter
router.post('/twitter', twitter);
//Login instagram
// http://localhost:3002/api/auth/instagram
router.post('/instagram', instagram);

//Signout
// http://localhost:3002/api/auth/signout
router.get('/signout', signOut)


//Event
// http://localhost:3002/api/events
router.get('/api/events', signOut)


export default router;


