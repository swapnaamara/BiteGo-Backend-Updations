const express = require('express');
const router = express.Router();
const { 
  placeOrder, 
  getMyOrders, 
  getRestaurantOrders, 
  updateOrderStatus 
} = require('../controllers/orderController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, placeOrder);

router.get('/myorders', auth, getMyOrders); // Customer

router.get('/restaurant', auth, getRestaurantOrders); // Restaurant owner

router.put('/:id/status', auth, updateOrderStatus); // Restaurant/Rider/Admin

module.exports = router;
