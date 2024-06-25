const express = require('express');
const router = express.Router();
const sharedNoteController = require('../controllers/sharedNoteController');


router.post('/sharednote/add', sharedNoteController.addSharedNote);

router.get('/sharednotes', sharedNoteController.getSharedNotes);

router.get('/sharednote/:id', sharedNoteController.getSharedNoteById);

router.put('/sharednote/edit/:id', sharedNoteController.updateSharedNote);

router.delete('/sharednote/delete/:id', sharedNoteController.removeSharedNote);

module.exports = router;