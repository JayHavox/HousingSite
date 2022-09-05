const express = require ('express');
const router = express.Router();
const {getHomes, createHome, updateHome, deleteHome} = require('../controllers/homeController')

router.route('/').get(getHomes).post(createHome)
router.route('/:id').put(updateHome).delete(deleteHome)




module.exports = router;