const {body} = require('express-validator');

const registerAndLoginValidation = [
    body('pseudo')
        .exists({ checkFalsy : true})
        .withMessage('Pseudo is required')
        .isString({ checkFalsy : true})
        .withMessage('Pseudo must be a string of characters')
        .isLength({ min : 5, max : 20})
        .withMessage('Pseudo must be between 5 and 20 characters'),

    body('password')
        .exists({ checkFalsy : true})
        .withMessage('Password is required')
        .isString({ checkFalsy : true})
        .withMessage('Password must be a string of characters')
        .isLength({ min : 128, max : 128})
        .withMessage('Password must be between 128 characters long')
];

module.exports = {
    registerAndLoginValidation
}
