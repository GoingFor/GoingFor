import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

//
// import Event from './models/Event.js';
// import multer from 'multer';
//

/* IMPORTS */
import userRouter from './routes/userRoute.js';
import authRouter from './routes/authRoute.js';
import eventRouter from './routes/eventRoute.js';
import postRoute from './routes/posts.js'
import commentRoute from './routes/comments.js'


const app = express();

const PORT = process.env.PORT || 3001
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME


/* DATENBANK */
async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@atlascluster.u1jgjau.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    );
    console.log('Connected to MongoDB!');
  } catch (error) {
      console.log('Connection failed',error)
  }
}
start();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('uploads'));

/* ROUTEN */
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/posts', postRoute)
app.use('/api/comments', commentRoute)
app.use('/api/events', eventRouter);

// // app.use('/api/listing', listingRouter);


// // app.use(express.static(path.join(__dirname, '/client/dist')));

// // app.get('*', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// // })


// /* ERROR HANDLING */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// /* LISTENER */
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))


// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// app.post('/api/upload', upload.single('photos'), async (req, res) => {
//   try {
//     const event = new Event({
//       // Andere Felder aus req.body hinzufügen
//       photos: req.file.path, // Annahme, dass Sie ein Feld 'photos' für den Dateipfad haben
//     });

//     await event.save();

//     res.status(201).json({ message: 'Datei hochgeladen und Event erstellt!' });
//   } catch (error) {
//     console.error('Fehler beim Hochladen der Datei:', error);
//     res.status(500).json({ error: 'Serverfehler beim Hochladen der Datei' });
//   }
// });









// // CHATGPT_INTEGRATION
// // const express = require('express');
// // // const app = express();
// // const { sendMessageToGPT } = require('./gptService');

// // app.use(express.json());

// // app.post('/chat', async (req, res) => {
// //   const userMessage = req.body.message;
// //   const gptResponse = await sendMessageToGPT(userMessage);
// //   res.json({ response: gptResponse });
// // });

// // app.listen(5000, () => {
// //   console.log('The server is running on the port 3002');
// // });