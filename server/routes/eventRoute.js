/** EXTERNE DEPENDENCIES */
import express, { Router } from 'express';

/** IMPORTS */
import { verifyToken } from '../utils/verifyUser.js';
import { createEvent, getEvent, getAllEvents, getEventsByGenre, getEventByGenre } from '../controllers/eventController.js';

/** VARIABLEN */
const eventRouter = Router();

eventRouter
    .post('/createevent', 
        verifyToken,
        createEvent);

eventRouter
    .get('/list', 
        verifyToken,
        getAllEvents);

// ein spez. Event anzeigen lassen
eventRouter
    .get('/getevent/:id',
        verifyToken,
        getEvent);

eventRouter
    .get('/genres', 
        getEventsByGenre);    
        
eventRouter
    .get('/events/genres/:genre', 
        getEventByGenre)

export default eventRouter;
