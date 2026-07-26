const Restaurant = require('../models/Restaurant');

// @desc    Get all restaurants
// @route   GET /api/restaurants
exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ isOpen: true });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// @desc    Get restaurant by ID
// @route   GET /api/restaurants/:id
exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ msg: 'Restaurant not found' });
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// @desc    Create restaurant
// @route   POST /api/restaurants
exports.createRestaurant = async (req, res) => {
  try {
    const { name, description, address, cuisine } = req.body;
    const restaurant = new Restaurant({
      owner: req.user.id,
      name, description, address, cuisine
    });
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// @desc    Update restaurant
// @route   PUT /api/restaurants/:id
exports.updateRestaurant = async (req, res) => {
  try {
    let restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ msg: 'Restaurant not found' });
    if (restaurant.owner.toString() !== req.user.id && req.user.role !== 'admin')
      return res.status(401).json({ msg: 'Not authorized' });

    restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};