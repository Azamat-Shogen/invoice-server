import { check  } from 'express-validator';

exports.userRegisterValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .isLength({min: 2})
        .withMessage('Name is too short')
        .isLength({max: 32})
        .withMessage('Name is too long'),
    
    check('email')
        .isEmail()
        .withMessage('Must be a valid email')
        .isLength({max: 36})
        .withMessage('Email is too long'),

    check('password')
        .isLength({min: 6})
        .withMessage('Password must be at least 6 character long')
        .isLength({max: 32})
        .withMessage('Password is too long'),
];