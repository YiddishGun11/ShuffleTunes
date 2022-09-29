const multer = require('multer');
const sftpStorage = require('multer-sftp');

const storage = sftpStorage({
    sftp: {
        host: process.env.SFTP_HOST,
        port: 22,
        username: process.env.SFTP_USERNAME,
        password: process.env.SFTP_PASSWORD
    },
    //Save the song into the folder /tmp/newSongs
    destination: (req, file, cb) => {
        cb(null, '/tmp/newSongs');
    },
    // the file name when uploaded stay the same
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({storage: storage});

module.exports = upload