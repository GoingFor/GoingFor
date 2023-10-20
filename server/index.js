import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
// import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

// mongoose
//   .connect(process.env.MONGO)
//   .then(() => {
//     console.log('Connected to MongoDB!');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const PORT = process.env.PORT || 3001
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

async function start() {
  try {
      await mongoose.connect(
          `mongodb+srv://${DB_USER}:${DB_PASSWORD}@atlascluster.u1jgjau.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
      )

      app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
  } catch (error) {
      console.log(error)
  }
}
start()

  const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(cookieParser());

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });


// Middleware
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
// app.use('/api/listing', listingRouter);


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});


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