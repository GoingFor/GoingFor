import express from 'express';
import { facebook, google, signOut, signin, signup } from '../controllers/auth.controller.js';

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

router.post('/facebook', facebook);

//Signout
// http://localhost:3002/api/auth/signout
router.get('/signout', signOut)

export default router;


