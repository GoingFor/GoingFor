// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';

// const app = express();
// app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/goingfor', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const eventSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   datetime: Date,
//   category: String,
//   region: String,
// });

// const Event = mongoose.model('Event', eventSchema);

// // Erstellen Sie ein neues Event
// app.post('/events', async (req, res) => {
//   try {
//     const { title, description, datetime, category, region } = req.body;
//     const event = new Event({
//       title,
//       description,
//       datetime,
//       category,
//       region,
//     });
//     await event.save();
//     res.status(201).json(event);
//   } catch (error) {
//     res.status(500).json({ error: 'Das Event konnte nicht erstellt werden.' });
//   }
// });

// // Holen Sie sich alle Events
// app.get('/events', async (req, res) => {
//   try {
//     const events = await Event.find();
//     res.status(200).json(events);
//   } catch (error) {
//     res.status(500).json({ error: 'Die Events konnten nicht abgerufen werden.' });
//   }
// });

// // Links zu anderen Musikquellen
// const musicSources = {
//   rock:        ['link1', 'link2', 'link3'],
//   electro:     ['link4', 'link5', 'link6'],
//   schlager:    ['link7', 'link8', 'link9'],
//   metal:       ['link10', 'link11', 'link12'],
//   gothic:      ['link13', 'link14', 'link15'],
//   mittelalter: ['link16', 'link17', 'link18'],
//   jazz:        ['link19', 'link20', 'link21'],
//   blues:       ['link22', 'link23', 'link24'],
//   reagae:      ['link25', 'link26', 'link27'],
//   hiphop:      ['link28', 'link29', 'link30'],
  
//   // Fügen Sie weitere Musikgenres hier hinzu
// };

// // Holen Sie sich Links zu anderen Musikquellen für die angegebene Musik-Kategorie
// app.get('/music-sources/:category', (req, res) => {
//   const category = req.params.category.toLowerCase();
//   const sources = musicSources[category] || [];
//   res.status(200).json(sources);
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Der Server läuft auf Port ${PORT}`);
// });