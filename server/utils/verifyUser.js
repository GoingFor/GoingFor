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


// export const verifyToken = (req, res, next) => {
//   const token = req.cookies.access_token;

//   if (!token) return next(errorHandler(401, 'Unauthorized'));

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return next(errorHandler(403, 'Forbidden'));
//     const token = jwt.sign(user, process.env.JWT_SECRET);
//     res
//       .cookie('access_token', token, 
//       { 
//         maxAge: 5 * 60 * 1000,
//         httpOnly: true 
//       })

//     next();
//   });
// };



// import jwt from 'jsonwebtoken'
// export const checkAuth = (req, res, next) => {
//     const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

//     if (token) {
//         try {
//             const decoded = jwt.verify(token, process.env.JWT_SECRET)

//             req.userId = decoded.id

//             next()
//         } catch (error) {
//             return res.json({
//                 message: 'Kein Zugang.',
//             })
//         }
//     } else {
//         return res.json({
//             message: 'Kein Zugang.',
//         })
//     }
// }
