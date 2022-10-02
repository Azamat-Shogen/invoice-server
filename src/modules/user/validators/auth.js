import { check } from 'express-validator';

const userRegisterValidator = [
    check('name')
        .trim()
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

const userLoginValidator = [
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

const userUpdateValidator = [
    check('name')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Name is required')
        .isLength({min: 2})
        .withMessage('Name is too short')
        .isLength({max: 32})
        .withMessage('Name is too long')
        .optional(),

    check('password')
        .isLength({min: 6})
        .withMessage('Password must be at least 6 character long')
        .isLength({max: 32})
        .withMessage('Password is too long')
        .optional(),
];


export { userLoginValidator, userRegisterValidator, userUpdateValidator };


// exports.userRegisterValidator = [
//     check('name')
//         .trim()
//         .not()
//         .isEmpty()
//         .withMessage('Name is required')
//         .isLength({min: 2})
//         .withMessage('Name is too short')
//         .isLength({max: 32})
//         .withMessage('Name is too long'),
    
//     check('email')
//         .isEmail()
//         .withMessage('Must be a valid email')
//         .isLength({max: 36})
//         .withMessage('Email is too long'),

//     check('password')
//         .isLength({min: 6})
//         .withMessage('Password must be at least 6 character long')
//         .isLength({max: 32})
//         .withMessage('Password is too long'),
// ];

// exports.userLoginValidator = [
//     check('email')
//         .isEmail()
//         .withMessage('Must be a valid email')
//         .isLength({max: 36})
//         .withMessage('Email is too long'),

//     check('password')
//         .isLength({min: 6})
//         .withMessage('Password must be at least 6 character long')
//         .isLength({max: 32})
//         .withMessage('Password is too long'),
// ];

// exports.userUpdateValidator = [
//     check('name')
//         .trim()
//         .not()
//         .isEmpty()
//         .withMessage('Name is required')
//         .isLength({min: 2})
//         .withMessage('Name is too short')
//         .isLength({max: 32})
//         .withMessage('Name is too long')
//         .optional(),

//     check('password')
//         .isLength({min: 6})
//         .withMessage('Password must be at least 6 character long')
//         .isLength({max: 32})
//         .withMessage('Password is too long')
//         .optional(),
// ];