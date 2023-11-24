/** EXTERNE DEPENDENCIES */
import express, { Router } from 'express';

/** IMPORTS */
import { sendEmail } from '../controllers/contactController.js';

/** VARIABELN */
const contactRouter = Router();


contactRouter
    .post('/send-email', 
        sendEmail);

export default contactRouter
