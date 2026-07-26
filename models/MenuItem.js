const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  restaurant: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Restaurant',
    required: true 
  },
  name: { 
    type: String, 
    required: true,
    trim: true
  },
  description: { 
    type: String,
    default: ''
  },
  price: { 
    type: Number, 
    required: true,
    min: 0
  },
  category: { 
    type: String,
    enum: ['Starters', 'Main Course', 'Biryani', 'Pizza', 'Burger', 'Drinks', 'Desserts', 'Other'],
    default: 'Other'
  },
  image: { 
    type: String,
    default: ''
  },
  isAvailable: { 
    type: Boolean, 
    default: true 
  },
  isVeg: {
    type: Boolean,
    default: true
  },
  rating: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', menuItemSchema);