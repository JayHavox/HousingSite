const express = require ('express');
const router = express.Router();
const {getHomes, createHome, updateHome, deleteHome, showHome} = require('../controllers/homeController')
const validateHouse = require('../middleware/validateHouse')
const {protect} = require ('../middleware/authMiddleware')


router.route('/')
.get(getHomes)
.post(protect,validateHouse,createHome)


router.route('/:id')
.put(protect,validateHouse,updateHome)
.delete(protect,deleteHome)
.get(showHome)





module.exports = router;