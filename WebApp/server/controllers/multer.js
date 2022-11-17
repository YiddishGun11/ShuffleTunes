const multer = require('multer');
const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 500000000,  //500Mb
        files: 20,
        fields: 0
    },
    fileFilter: (request, file, callback) => {
        if (file.mimetype === "audio/mpeg" || file.mimetype === "audio/wav"){
            callback(null, true);
        } else {
            return callback(new Error('Invalid mime type'));
        }
    }
    

}).array('musicFile', 20);

module.exports = upload