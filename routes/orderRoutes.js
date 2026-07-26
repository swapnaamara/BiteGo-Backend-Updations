const express = require('express');
const router = express.Router();
const { 
  placeOrder, 
  getMyOrders, 
  getRestaurantOrders, 
  updateOrderStatus 
} = require('../controllers/orderController');
const auth = require('../middleware/authMiddleware');

// @route   POST /api/orders
router.post('/', auth, placeOrder);

// @route   GET /api/orders/myorders
router.get('/myorders', auth, getMyOrders); // Customer

// @route   GET /api/orders/restaurant
router.get('/restaurant', auth, getRestaurantOrders); // Restaurant owner

// @route   PUT /api/orders/:id/status
router.put('/:id/status', auth, updateOrderStatus); // Restaurant/Rider/Admin

module.exports = router;