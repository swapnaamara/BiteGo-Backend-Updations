const Order = require('../models/Order');

// @desc    Place order
// @route   POST /api/orders
exports.placeOrder = async (req, res) => {
  try {
    const { restaurant, items, totalAmount, deliveryAddress } = req.body;
    const order = new Order({
      customer: req.user.id,
      restaurant, items, totalAmount, deliveryAddress
    });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// @desc    Get customer orders
// @route   GET /api/orders/myorders
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ customer: req.user.id }).populate('restaurant');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// @desc    Get restaurant orders
// @route   GET /api/orders/restaurant
exports.getRestaurantOrders = async (req, res) => {
  try {
    const orders = await Order.find({ restaurant: req.body.restaurantId }).populate('customer');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// @desc    Update order status
// @route   PUT /api/orders/:id/status
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    let order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ msg: 'Order not found' });

    order.status = status;
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};