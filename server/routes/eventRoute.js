import express, { Router } from 'express';

/* IMPORTS */
import { verifyToken } from '../utils/verifyUser.js';
import { createEvent, getEvent, getAllEvents, getEventsByGenre } from '../controllers/event.controller.js';

/* VARIABLEN */
const eventRouter = Router();

eventRouter
    .post('/createevent', createEvent);

eventRouter
    .get('/list', getAllEvents);

// ein spez. Event anzeigen lassen
eventRouter
    .get('/getevent/:id',
        verifyToken,
        getEvent);

eventRouter
    .get('/genres', getEventsByGenre);    
        
eventRouter.get('/events/genres/:genre', async (req, res) => {
    const genre = req.params.genre;

    try {
        const events = await Event.find({ genreOptions: { $regex: new RegExp(genre, 'i') } });


        res.status(200).json({
            success: true,
            data: events,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: 'Internale Serverfehler',
        });
    }
});

export default eventRouter;
