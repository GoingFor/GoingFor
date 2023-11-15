import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  startDate: Date,
  endDate: Date,
  campingOptions: {
    type: [String],
    default: [],
  },
  accessibilityOptions: {
    type: [String], // Ein Array von Strings
    default: [],    // Standardmäßig leeres Array
  }, 
  genreOptions: {
    type: [String],
    default: [],
  },
  locationOptions: {
    type: [String],
    default: [],
  },
  websiteLink: String,
  cheapestTicket: String,
  savingTip: String,
  eventLink: String,
  photos: String, // Du kannst dieses Feld entsprechend deiner Anforderungen ändern
  street: String, 
  housenumber: String,  
  postcode: String,       
  city: String  
});
  
const Event = mongoose.model('Event', eventSchema);
  
export default Event;

