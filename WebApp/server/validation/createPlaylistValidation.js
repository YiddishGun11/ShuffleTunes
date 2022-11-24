const {body} = require('express-validator');

const createPlaylistValidation = [
    body('playlistName')
        .exists({ checkFalsy : true})
        .withMessage('A valid playlist name is required')
        .isString({ checkFalsy : true})
        .withMessage('playlist name must be a string of characters')
        .isLength({ min : 3, max : 30})
        .withMessage('playlist name must be between 3 and 30 characters'),
]

module.exports = {
    createPlaylistValidation
}