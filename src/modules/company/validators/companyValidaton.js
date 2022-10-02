import { check } from 'express-validator';

export const companyValidation = [
    check('companyName')
        .trim()
        .not()
        .isEmpty()
        .isLength({min: 3})
        .withMessage('Company name is required, min - 3 characters'),
        
    check('address')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Address is required'),

    check('city')
        .trim()
        .not()
        .isEmpty()
        .withMessage('City is required'),

    check('state')
        .trim()
        .not()
        .isEmpty()
        .withMessage('State is required'),

    check('zipcode')
        .trim()
        .not()
        .isEmpty()
        .withMessage('zipcode is required'),
    
    check('email')
        .isEmail()
        .withMessage('Must be a valid email')
        .optional(),
    
    check('phone')
        .trim()
        .not()
        .isEmpty()
        .isLength({min: 10})
        .withMessage('Phone number must be at least 10 characters long')
        .optional(),
        
];

export const companyUpdateValidation = [
    check('companyName')
        .trim()
        .not()
        .isEmpty()
        .isLength({min: 3})
        .withMessage('Company name is required, min - 3 characters')
        .optional(),
        
    check('address')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Address is required')
        .optional(),

    check('city')
        .trim()
        .not()
        .isEmpty()
        .withMessage('City is required')
        .optional(),

    check('state')
        .trim()
        .not()
        .isEmpty()
        .withMessage('State is required')
        .optional(),


    check('zipcode')
        .trim()
        .not()
        .isEmpty()
        .withMessage('zipcode is required')
        .optional(),

    
    check('email')
        .isEmail()
        .withMessage('Must be a valid email')
        .optional(),
    
    check('phone')
        .trim()
        .not()
        .isEmpty()
        .isLength({min: 10})
        .withMessage('Phone number must be at least 10 characters long')
        .optional(),
        
];

// exports.companyValidation = [
//     check('companyName')
//         .trim()
//         .not()
//         .isEmpty()
//         .isLength({min: 3})
//         .withMessage('Company name is required, min - 3 characters'),
        
//     check('address')
//         .trim()
//         .not()
//         .isEmpty()
//         .withMessage('Address is required'),

//     check('city')
//         .trim()
//         .not()
//         .isEmpty()
//         .withMessage('City is required'),

//     check('state')
//         .trim()
//         .not()
//         .isEmpty()
//         .withMessage('State is required'),

//     check('zipcode')
//         .trim()
//         .not()
//         .isEmpty()
//         .withMessage('zipcode is required'),
    
//     check('email')
//         .isEmail()
//         .withMessage('Must be a valid email')
//         .optional(),
    
//     check('phone')
//         .trim()
//         .not()
//         .isEmpty()
//         .isLength({min: 10})
//         .withMessage('Phone number must be at least 10 characters long')
//         .optional(),
        
// ];

// exports.companyUpdateValidation = [
//     check('companyName')
//         .trim()
//         .not()
//         .isEmpty()
//         .isLength({min: 3})
//         .withMessage('Company name is required, min - 3 characters')
//         .optional(),
        
//     check('address')
//         .trim()
//         .not()
//         .isEmpty()
//         .withMessage('Address is required')
//         .optional(),

//     check('city')
//         .trim()
//         .not()
//         .isEmpty()
//         .withMessage('City is required')
//         .optional(),

//     check('state')
//         .trim()
//         .not()
//         .isEmpty()
//         .withMessage('State is required')
//         .optional(),


//     check('zipcode')
//         .trim()
//         .not()
//         .isEmpty()
//         .withMessage('zipcode is required')
//         .optional(),

    
//     check('email')
//         .isEmail()
//         .withMessage('Must be a valid email')
//         .optional(),
    
//     check('phone')
//         .trim()
//         .not()
//         .isEmpty()
//         .isLength({min: 10})
//         .withMessage('Phone number must be at least 10 characters long')
//         .optional(),
        
// ];