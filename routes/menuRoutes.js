const express = require('express');
const router = express.Router();
const { 
  getMenuByRestaurant, 
  addMenuItem, 
  updateMenuItem, 
  deleteMenuItem 
} = require('../controllers/menuController');
const auth = require('../middleware/authMiddleware');

router.get('/:restaurantId', getMenuByRestaurant);

router.post('/:restaurantId', auth, addMenuItem); // Restaurant owner

router.put('/item/:id', auth, updateMenuItem);

router.delete('/item/:id', auth, deleteMenuItem);

module.exports = router;
