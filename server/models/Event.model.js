const EventSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: Date,
    camping: String,
    ticketLink: String,
    cheapestTicket: String,
    savingTip: String,
    offeredDescription: String,
    accessibility: String,
    photos: String, // Du kannst dieses Feld entsprechend deiner Anforderungen ändern
    startDate: Date,
    endDate: Date,
  });
  
  const Event = mongoose.model('Event', EventSchema);
  
  app.post('/api/events', async (req, res) => {
    const eventData = req.body;
    try {
      const event = new Event(eventData);
      await event.save();
      res.status(201).json({ message: 'Event erstellt!' });
    } catch (error) {
      res.status(500).json({ error: 'Fehler beim Speichern des Events.' });
    }
  });