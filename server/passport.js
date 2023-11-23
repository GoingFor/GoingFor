import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

// Здесь вставьте свои данные из Google Developer Console
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//       callbackURL: 'http://localhost:3002/api/auth/google/callback',
//     },
//     (accessToken, refreshToken, profile, done) => {
//       // Функция обратного вызова, где вы обработаете данные, полученные от Google
//       // и передадите управление в следующий обработчик
//       return done(null, profile);
//     }
//   )
// );

passport.use(new GoogleStrategy({
  clientID: 'YOUR_GOOGLE_CLIENT_ID',
  clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
  callbackURL: 'http://localhost:3002/api/auth/google/callback', // Укажите свой реальный URL-адрес обратного вызова
  userProfileURL: 'http://googleapis.com/oauth2/v3/userinfo'
}, google));

passport.serializeUser((user, done) => {
  // Если вы используете сессии, здесь вы можете сохранить часть данных в сессию
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  // Если вы используете сессии, здесь вы можете восстановить данные из сессии
  done(null, obj);
});

export default passport;