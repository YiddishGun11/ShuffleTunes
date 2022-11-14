/* This file contain the request limiter configuration. It define the number of request allowed in a time window */

const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute window
    max: 12, // 12 request per minute += 1 request ever 5 sec
});

module.exports = {
    limiter
}