import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {

  try {
    const token = req.cookies.access_token;
    if (!token) {
      return next(errorHandler(401, 'Unauthorized'));
    }

    const verifyUser = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verifyUser;
    next();
    
  } catch (error) {
      res.status(401).json({
        success: false,
        message: 'Stop, you are not logged in!'
      });
  }
}

