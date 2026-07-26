const express = require('express');
const router = express.Router();
const { 
  getRestaurants, 
  getRestaurantById, 
  createRestaurant, 
  updateRestaurant 
} = require('../controllers/restaurantController');
const auth = require('../middleware/authMiddleware');

// @route   GET /api/restaurants
router.get('/', getRestaurants);

// @route   GET /api/restaurants/:id
router.get('/:id', getRestaurantById);

// @route   POST /api/restaurants
router.post('/', auth, createRestaurant); // Only restaurant owner/admin

// @route   PUT /api/restaurants/:id
router.put('/:id', auth, updateRestaurant);

module.exports = router;