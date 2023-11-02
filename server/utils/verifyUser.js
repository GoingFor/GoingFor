
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



import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(errorHandler(401, 'Unauthorized'));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, 'Forbidden'));
    res.json(user);
    // req.user = user;
    next();
  });
};
