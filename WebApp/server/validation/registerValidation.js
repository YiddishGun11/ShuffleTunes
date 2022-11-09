const {body} = require('express-validator');

const registerValidation = [
    body('pseudo')
        .exists({ checkFalsy : true})
        .withMessage('Pseudo is required')
        .isString({ checkFalsy : true})
        .withMessage('Pseudo must be a string of characters')
        .isLength({ min : 5, max : 20})
        .withMessage('Pseudo must be between 5 and 20 characters'),

    body('password')
        .exists({ checkFalsy : true})
        .withMessage('Pseudo is required')
        .isString({ checkFalsy : true})
        .withMessage('Pseudo must be a string of characters')
        .isLength({ min : 8, max : 64})
        .withMessage('Pseudo must be between 8 and 64 characters')
];

module.exports = {
    registerValidation
}
