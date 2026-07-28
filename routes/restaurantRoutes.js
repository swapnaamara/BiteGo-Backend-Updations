const express = require('express');
const router = express.Router();
const { 
  getRestaurants, 
  getRestaurantById, 
  createRestaurant, 
  updateRestaurant 
} = require('../controllers/restaurantController');
const auth = require('../middleware/authMiddleware');

router.get('/', getRestaurants);

router.get('/:id', getRestaurantById);

router.post('/', auth, createRestaurant); // Only restaurant owner/admin

router.put('/:id', auth, updateRestaurant);

module.exports = router;
