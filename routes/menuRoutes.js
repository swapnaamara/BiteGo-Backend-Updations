const express = require('express');
const router = express.Router();
const { 
  getMenuByRestaurant, 
  addMenuItem, 
  updateMenuItem, 
  deleteMenuItem 
} = require('../controllers/menuController');
const auth = require('../middleware/authMiddleware');

// @route   GET /api/menu/:restaurantId
router.get('/:restaurantId', getMenuByRestaurant);

// @route   POST /api/menu/:restaurantId
router.post('/:restaurantId', auth, addMenuItem); // Restaurant owner

// @route   PUT /api/menu/item/:id
router.put('/item/:id', auth, updateMenuItem);

// @route   DELETE /api/menu/item/:id
router.delete('/item/:id', auth, deleteMenuItem);

module.exports = router;