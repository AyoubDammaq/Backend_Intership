const express = require('express');

const router = express.Router();


const categoryController = require('../controllers/categoryController');



router.post('/category/add' ,categoryController.createCategory);

router.get('/categories', categoryController.getAllCategories);

router.get('/category/:id', categoryController.getCategoryByID);

router.put('/category/edit/:id', categoryController.UpdateCategory);

router.delete('/category/delete/:id', categoryController.deleteCategory);



module.exports = router;