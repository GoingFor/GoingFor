import express, { Router } from 'express';

/* IMPORTS */
import { verifyToken } from '../utils/verifyUser.js';
import { createEvent, getEvent } from '../controllers/event.controller.js';

/* VARIABLEN */
const eventRouter = Router();

eventRouter
    .post('/createevent', createEvent);

// ein spez. Event anzeigen lassen
eventRouter
    .get('/getevent/:id',
        // verifyToken,
        getEvent);

export default eventRouter;
