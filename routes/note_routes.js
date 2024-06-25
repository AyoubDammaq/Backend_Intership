const express = require('express');

const router = express.Router();


const noteController = require('../controllers/noteController');



router.post('/note/add' ,noteController.addNote);

router.get('/notes', noteController.getNotes);

router.get('/note/:id', noteController.getNoteById);

router.put('/note/edit/:id', noteController.updatedNote);

router.delete('/note/delete/:id', noteController.removeNote);



module.exports = router;