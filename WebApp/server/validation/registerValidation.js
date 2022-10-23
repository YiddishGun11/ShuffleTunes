const {body} = require('express-validator');

const registerValidation = [
    body('pseudo')
        .exists({ checkFalsy : true})
        .withMessage('Pseudo is required')
        .isString({ checkFalsy : true})
        .withMessage('Pseudo must be a string of characters')
        .isLength({ min : 5, max : 20})
        .withMessage('Pseudo must be between 5 and 20 characters')
        .matches('^(?=.*[A-Za-z])[A-Za-z0-9_@]{5,20}$')
        .withMessage('Pseudo doesn\'t respect the norm'),

    body('password')
        .exists({ checkFalsy : true})
        .withMessage('Pseudo is required')
        .isString({ checkFalsy : true})
        .withMessage('Pseudo must be a string of characters')
        .isLength({ min : 10, max : 20})
        .withMessage('Pseudo must be between 10 and 20 characters')
        .matches('^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[A-Za-z0-9@<>!-_%]{10,20}$')
        .withMessage('Pseudo doesn\'t respect the norm')
];

module.exports = {
    registerValidation
}
