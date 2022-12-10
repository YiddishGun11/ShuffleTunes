/* This file contain the request limiter configuration. It define the number of request allowed in a time window */

const rateLimit = require('express-rate-limit');

const whiteList = ["::ffff:127.0.0.1"];

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute window
    max: async (request, response) => { // 12 request per minute += 1 request ever 5 sec or 999 if you are localhost
        if (whiteList.includes(request.ip)){
            return 999
        }
        return 12
    }, 
});

module.exports = {
    limiter
}