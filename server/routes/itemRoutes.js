const express = require('express')
const itemController = require('../controllers/itemController')

const router = express.Router();

router.get('/items', itemController.items)
router.get('/items/view/:id', itemController.viewItem)
router.get('/items/add', itemController.addItemForm)
router.post('/items/create-item', itemController.addItem)
router.get('/items/edit/:id', itemController.editItemForm)
router.put('/items/edit/:id', itemController.editItem)
router.delete('/items/delete/:id', itemController.deleteItem) 

module.exports = router;