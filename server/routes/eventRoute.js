import express, { Router } from 'express';

/* IMPORTS */
import { verifyToken } from '../utils/verifyUser.js';
<<<<<<< HEAD
import { createEvent, getEvent, getAllEvents, getEventsByGenre } from '../controllers/event.controller.js';
=======
import { createEvent, getEvent, getAllEvents,getEventsByGenre } from '../controllers/event.controller.js';
>>>>>>> develop2

/* VARIABLEN */
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
    .get('/genres', getEventsByGenre);    
<<<<<<< HEAD
        
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
=======
    
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
>>>>>>> develop2

export default eventRouter;
