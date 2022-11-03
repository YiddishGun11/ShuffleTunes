const argon2  = require('argon2');

async function hashSting (string) {

    try {
        const hash = await argon2.hash(string);
        return hash;

    } catch (error) {
        console.log(error);
    }

}

async function verifyString (hashedString, stringToVerify) {

    try {
        const isMatching = await argon2.verify(hashedString, stringToVerify);
        return isMatching;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    hashSting,
    verifyString
}