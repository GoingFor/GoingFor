import { body } from 'express-validator';

const signupValidation = [
    body('password')
        .not()
        .isEmpty()
        .withMessage('Passwort darf nicht leer sein.')
        .isLength({ min: 5 })
        .withMessage('Passwort muss mindestens 5 Zeichen lang sein.')
        .not()
        .isIn(['passwort', '12345'])
        .withMessage('Ungültiges Passwort.'),
    body('username')
        .not()
        .isEmpty()
        .withMessage('Bitte gib einen Benutzernamen an.')
        .trim(),
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email darf nicht leer sein.')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Bitte gib eine gültige Emailadresse an.')
];

export { signupValidation };