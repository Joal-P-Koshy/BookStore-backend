
const express = require('express');

const adminController = require('../Controller/adminController');
const bookController = require('../Controller/bookController')

const router = new express.Router();


// admin login
router.post('/admin/login', adminController.adminLogin);


// add book
router.post('/addbook', bookController.addBook);



module.exports = router;