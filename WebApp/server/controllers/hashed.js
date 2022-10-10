'use strict'

const crypto  = require('node:crypto');

function hash512String(username)
{
    let hash = crypto.createHash('sha512');

    let data = hash.update(username);

    return data.digest('hex');
}

module.exports = {
    hash512String
}