/** EXTERNE DEPENDENCIES */
import { body } from 'express-validator';

const signupValidation = [
    body('password')
        .isLength({ min: 5 })
        .withMessage('Passwort muss mindestens 5 Zeichen lang sein.')
        .not()
        .isIn(['passwort', '12345'])
        .withMessage('Ungültiges Passwort.'),
    body('username')
        .not()
        .isEmpty()
        .trim()
        .withMessage('Bitte gib einen Benutzernamen an.'),
    body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Bitte gib eine gültige Emailadresse an.')
];

export { signupValidation };