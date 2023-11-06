import express, { Router } from 'express';
import Event from '../models/Event.js';

/* IMPORTS */
import { createEvent } from '../controllers/event.controller.js';

/* VARIABLEN */
const eventRouter = Router();

eventRouter
    .post('/createevent', createEvent);

export default eventRouter;
