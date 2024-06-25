const multer = require('multer');
const path = require('path');

let filename = '';

module.exports.mediaStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../media'));
    },
    filename: (req, file, cb) => {
        let date = Date.now();
        let extension = path.extname(file.originalname);
        let fl = date + extension;
        cb(null, fl);
        filename = fl;
    }
});
