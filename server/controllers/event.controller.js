import Event from '../models/Event.js';

export const createEvent = async(req, res, next) => {
    try {
        const eventData = req.body;
        const event = new Event(eventData);
        await event.save();
        res.status(201).json({ message: 'Event erstellt!' });
    } catch (error) {
        res.status(500).json({ error: 'Fehler beim Speichern des Events.' });
    }
}
