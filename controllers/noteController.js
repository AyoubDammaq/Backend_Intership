const db = require('../database_config/db');

const moment = require('moment');
const multer = require('multer');
const { mediaStorage } = require('./uploadConfig');
const upload = multer({ storage: mediaStorage });


module.exports.addNote = [
    upload.single('attachedMedia'),
    async (req, res) => {
        const file = req.file;
        const attachedMedia = file ? file.filename : null;
        const { title, description, category, submitDate, userId, color } = req.body;

        const formattedDate = moment(submitDate).format('YYYY-MM-DD HH:mm:ss');

        const sql = "INSERT INTO note (title, description, category, attachedMedia,submitDate, userId, color) VALUES (?, ?, ?, ?, ?, ?, ?)";
        
        try {
            await db.query(sql, [title, description, category, attachedMedia, formattedDate, userId, color]);
            res.status(200).send("Note added successfully");
            console.log('Note added successfully');
        } catch (error) {
            console.error('Database error:', error);
            return res.status(500).send(error);
        }
    }
]

module.exports.getNotes = async (req, res) => {
    try {
        const [notes] = await db.query("SELECT * FROM note");
        res.status(200).send(notes);
    } catch (err) {
        res.status(500).send(err.message);
        console.log(err);
    }
};

module.exports.getNoteById = async (req, res) => {
    try {
        const _id = req.params.id;
        const note = await db.query("SELECT * FROM note WHERE idNote = ?", [_id]);
        res.status(200).send(note);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports.updatedNote = async (req, res) => {
    const _id = req.params.id;
    const { title, description, category,submitDate } = req.body;

    const sql = "UPDATE note SET title = ?, description = ?, category = ?, submitDate = ? WHERE idNote = ?";
    try {
        await db.query(sql, [title, description, category,submitDate, _id]);
        res.status(200).send("Note updated successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports.removeNote = async (req, res) => {
    try {
        const _id = req.params.id;
        await db.query("DELETE FROM note where idNote = ?", [_id]);
        res.status(200).send('Note was deleted successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};


