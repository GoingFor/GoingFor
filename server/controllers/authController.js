/** EXTERNE DEPENDENCIES */
import bcryptjs from 'bcryptjs';
import validator, { cookie, validationResult } from 'express-validator';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as InstagramStrategy } from 'passport-instagram';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as TwitterStrategy } from 'passport-twitter';
import jwt from 'jsonwebtoken';

/** IMPORTS */
import User from '../models/User.js';
import { errorHandler } from '../utils/error.js';


// Singnup
export const signup =  async(req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const error = validator.validationResult(req).errors;
        if(error.length > 0) {
            return res.status(400).json({
                success: false,
                msg: error.map(err => err.msg)
            });  
        };

    const isUsed = await User.findOne({ $or: [{ username }, { email }] });
    
    if(isUsed){
      return res.status(401).json({
        message: 'Benutzername und/oder Email schon vergeben!',
      });
    }

    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({
      data: newUser,
      message: 'registration completed successfully'
    });

  } catch(error) {
    next(error)
  }
}

// Singnin
export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const validUser = await User.findOne({ email });
    // console.log(validUser);
    if (!validUser) {
      next(errorHandler(404, 'Überprüfe deine Eingaben!'));
    }
    
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'Überprüfe deine Eingaben!'));

    const token = jwt.sign(
      { 
        id: validUser._id, 
        email: validUser.email, 
        username: validUser.username 
      }, 
      process.env.JWT_SECRET,
      {expiresIn: '4h'}
      // {expiresIn: 30 * 60 * 1000}
      );
    // const { password: pass, ...rest } = validUser._doc;
    res
      .cookie('access_token', token, 
      { 
        maxAge: 4 * 60 * 60 * 1000, // 4 stunden
        httpOnly: true 
      })
      .status(200)
      .json({
        data: validUser
      });
    // console.log('---hier der cookie---', token);

  } catch (error) {
    next(error);
  }
};

// Social_Media_login
// Google


// export const google = async (req, res, next) => {
//   try {
//     const { email } = req.user;

//     // Проверим, есть ли пользователь с таким email в базе данных
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       // Если пользователь существует, генерируем JWT-токен
//       const token = jwt.sign(
//         {
//           id: existingUser._id,
//           email: existingUser.email,
//           username: existingUser.username,
//         },
//         process.env.JWT_SECRET,
//         { expiresIn: '4h' }
//       );

//       // Отправляем токен в cookie и возвращаем его на клиент
//       res
//         .cookie('access_token', token, { maxAge: 4 * 60 * 60 * 1000, httpOnly: true })
//         .status(200)
//         .json({ data: existingUser });
//     } else {
//       // Если пользователя нет, создаем нового пользователя в базе данных
//       const newUser = new User({
//         email: req.user.email, // или используйте другие данные, которые вы получаете от Google
//         // Дополнительные данные, которые вы хотите сохранить для нового пользователя
//         // username, password и другие поля, если они требуются
//       });

//       await newUser.save();

//       // Генерируем JWT-токен для нового пользователя
//       const token = jwt.sign(
//         {
//           id: newUser._id,
//           email: newUser.email,
//           username: newUser.username,
//         },
//         process.env.JWT_SECRET,
//         { expiresIn: '4h' }
//       );

//       // Отправляем токен в cookie и возвращаем его на клиент
//       res
//         .cookie('access_token', token, { maxAge: 4 * 60 * 60 * 1000, httpOnly: true })
//         .status(200)
//         .json({ data: newUser });
//     }
//   } catch (error) {
//     next(error);
//   }
// };

export const google = async (req, res, next) => {
  try {
// Обработчик GET-запроса на /api/auth/google/callback
authRouter.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }), 
  (req, res) => {
    // Если аутентификация успешна, profile теперь содержит данные о пользователе
    const { id, username } = req.user; // Пример: извлекаем ID и имя пользователя

    // Ваша логика для получения защищенного кода
    const protectedCode = generateProtectedCode(); // Замените эту функцию своей логикой

    // Генерация нового токена с информацией о пользователе
    const token = jwt.sign(
      {
        id,
        username,
        protectedCode
      },
      process.env.JWT_SECRET,
      { expiresIn: '4h' }
    );

    // Отправляем токен в cookie и возвращаем его на клиент
    res
      .cookie('access_token', token, { maxAge: 4 * 60 * 60 * 1000, httpOnly: true })
      .status(200)
      .json({ 
        token,
        username,
        protectedCode
      });
  }
);

// Ваш обработчик /api/auth/google
authRouter.post('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

} catch (error) {
  next(error);
}
};




















// export const google = async (req, res, next) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (user) {
//       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//       const { password: pass, ...rest } = user._doc;
//       res
//         .cookie('access_token', token, { httpOnly: true })
//         .status(200)
//         .json(rest);
//     } else {
//       const generatedPassword =
//         Math.random().toString(36).slice(-8) +
//         Math.random().toString(36).slice(-8);
//       const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
//       const newUser = new User({
//         username:
//           req.body.name.split(' ').join('').toLowerCase() +
//           Math.random().toString(36).slice(-4),
//         email: req.body.email,
//         password: hashedPassword,
//         avatar: req.body.photo,
//       });
//       await newUser.save();
//       const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
//       const { password: pass, ...rest } = newUser._doc;
//       res
//         .cookie('access_token', token, { httpOnly: true })
//         .status(200)
//         .json(rest);
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// facebook
export const facebook = async (req, res, next) => {
  try {
    const user = await User.findOne({ facebookId: req.body.facebookId });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const newUser = new User({
        username:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-4),
        facebookId: req.body.facebookId,
        email: req.body.email,
        avatar: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

//instagram

export const instagram = async (req, res, next) => {
  try {
    const user = await User.findOne({ instagramId: req.body.facebookId });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const newUser = new User({
        username:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-4),
          instagramkId: req.body.facebookId,
        email: req.body.email,
        avatar: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

//twitter

export const twitter = async (req, res, next) => {
  try {
    const user = await User.findOne({ twitterId: req.body.facebookId });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const newUser = new User({
        username:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-4),
          twitterId: req.body.facebookId,
        email: req.body.email,
        avatar: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

// signOut
export const signOut = (req, res, next) => {
  try {
    return res
      .clearCookie('access_token')
      .status(201)
      .json({
        success: true,
        msg: 'Erfolgreich ausgeloggt'
      });
    
  } catch (error) {
    next(error)
  }   
};
