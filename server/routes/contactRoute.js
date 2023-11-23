import express, { Router } from 'express';
import { sendEmail } from '../controllers/contactController.js';

const contactRouter = Router();


contactRouter.post('/send-email', sendEmail);

export default contactRouter
