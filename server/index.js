import express from 'express';
import mongoose from 'mongoose';
// import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

/* IMPORTS */
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import setCors from './middlewares/cors.js';

// mongoose
//   .connect(process.env.MONGO)
//   .then(() => {
//     console.log('Connected to MongoDB!');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/* VARIABELN */
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
      )
  } catch (error) {
      console.log(error)
  }
}
start()

const __dirname = path.resolve();


/* MIDDLEWARE */
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(setCors);

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });


/* ROUTEN */
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
// app.use('/api/listing', listingRouter);


// app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// })


/* ERROR HANDLING */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

/* LISTENER */
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))

// CHATGPT_INTEGRATION
// const express = require('express');
// // const app = express();
// const { sendMessageToGPT } = require('./gptService');

// app.use(express.json());

// app.post('/chat', async (req, res) => {
//   const userMessage = req.body.message;
//   const gptResponse = await sendMessageToGPT(userMessage);
//   res.json({ response: gptResponse });
// });

// app.listen(5000, () => {
//   console.log('The server is running on the port 3002');
// });