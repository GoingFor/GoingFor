/** EXTERNE DEPENDENCIES */
import express, { Router } from 'express';
import jwt from 'jsonwebtoken';


import passport from 'passport';



/** IMPORTS */
import { facebook, google, instagram, twitter, signOut, signin, signup } from '../controllers/authController.js';
import { signupValidation } from '../validation/userValidation.js';
import { verifyToken } from '../utils/verifyUser.js';

/* VARIABELN */
const authRouter = Router();


// Register
// http://localhost:3002/api/auth/signup
authRouter
    .post("/signup", 
        signupValidation,
        signup);

// Login
// http://localhost:3002/api/auth/signin
authRouter
    .post("/signin", signin);

//Login Google
// http://localhost:3002/api/auth/google



// authRouter
//     .post('/google', google);
// //Login facebook
// // http://localhost:3002/api/auth/facebook

// authRouter.post('/google', async (req, res, next) => {
//     try {
//       const { email, name } = req.body;
  
//       // Здесь вам нужно обработать данные от Google и выполнить соответствующие действия
//       // Например, проверить, есть ли пользователь с таким email в базе данных и либо создать нового пользователя, либо выполнить вход для существующего
  
//       // Пример: создание нового пользователя
//       const newUser = new User({
//         email,
//         username: name, // Используйте данные, которые вы хотите сохранить для пользователя
//         // ...другие поля...
//       });
  
//       await newUser.save();
  
//       // Здесь можно сгенерировать JWT-токен и отправить его в cookie
//       // Также, вы можете отправить данные пользователя на клиент для дальнейшего использования
  
//       res.status(200).json({ data: newUser });
//     } catch (error) {
//       next(error);
//     }
//   });
  
//   // ...
  
//   // Добавьте этот роут в конец файла


authRouter
    .post('/google', google);

// authRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// authRouter.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
//   // Если аутентификация успешна, перенаправьте пользователя на нужный путь
//   res.redirect('/home');
// });
authRouter.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    try {
      // Если аутентификация успешна, у вас есть доступ к данным пользователя через req.user
  
      // Получите необходимые данные пользователя из req.user
      const { id, username } = req.user;
  
      // Получите дату, время и местоположение. Для примера я использую текущую дату и время, а также фиктивное местоположение
      const currentDate = new Date().toLocaleDateString();
      const currentTime = new Date().toLocaleTimeString();
      const location = 'Some Location';
  
      // Создайте объект с данными, которые вы хотите вернуть пользователю
      const userData = {
        id,
        username,
        date: currentDate,
        time: currentTime,
        location,
      };
  
      // Создайте JWT-токен с этими данными
      const token = jwt.sign(userData, process.env.JWT_SECRET);

      // console.log('Token:', token);
      // console.log('Benutzername:', username);
      // console.log('Zeit:', currentTime);

  
      // Отправьте токен в cookie и возвращайте его на клиент
      res
        .cookie('access_token', token, { maxAge: 4 * 60 * 60 * 1000, httpOnly: true })
        .status(200)
        .json({ data: userData });
  
    } catch (error) {
      console.error('Ошибка в обработчике /google/callback:', error);
      res.redirect('/'); // Редирект в случае ошибки
    }
  });



authRouter
    .post('/facebook', facebook);
//Login twitter
// http://localhost:3002/api/auth/twitter
authRouter
    .post('/twitter', twitter);
//Login instagram
// http://localhost:3002/api/auth/instagram
authRouter
    .post('/instagram', instagram);

//Signout
// http://localhost:3002/api/auth/signout
authRouter
    .post('/signout', 
        verifyToken,
        signOut)



export default authRouter;


