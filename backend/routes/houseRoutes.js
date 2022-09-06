const express = require ('express');
const router = express.Router();
const {getHomes, createHome, updateHome, deleteHome} = require('../controllers/homeController')
const validateHouse = require('../middleware/middleware.js');

router.route('/')
.get(getHomes)
.post(validateHouse,createHome)

router.route('/:id')
.put(validateHouse,updateHome)
.delete(deleteHome)




module.exports = router;