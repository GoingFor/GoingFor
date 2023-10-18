import express from 'express';
import { google, signOut, signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();


// Register
// http://localhost:3002/api/auth/signup

router.post("/signup", signup);

// Login
// http://localhost:3002/api/auth/signin
router.post("/signin", signin);
router.post('/google', google);
router.get('/signout', signOut)

export default router;