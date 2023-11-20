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


export const getEvent = async(req, res, next) => {
    try {
        const eventId = req.params.id;
        // const event = await Event.find({ name });
        const event = await Event.findById(eventId);
        res.status(200).json({
            success: true,
            event
        });

    } catch(err) {
        next(err);
    }
}


export const getAllEvents = async(req, res) => {
    try {
        const events = await Event.find();

        res.status(200).json({
            success: true,
            data: events
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: 'Internale Serverfehler'
        });
    }
};

export const getEventsByGenre = async (req, res) => {
    const genre = req.params.genre;
  
    try {
      const events = await Event.find({ genreOptions: genre });

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
  };