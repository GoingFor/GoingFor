import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    startDate: Date,
    endDate: Date,
    ticketLink: String,
    cheapestTicket: String,
    location: String,
    locationDescription: String,
    camping: String,
    genres: String,
    facts: String,
    eventLink: String,
    accessibility: String,
    photos: String, // Du kannst dieses Feld entsprechend deiner Anforderungen ändern
    
  });
  
const Event = mongoose.model('Event', eventSchema);
  
export default Event;

