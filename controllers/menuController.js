const mongoose = require('mongoose');
const menuItemSchema = new mongoose.Schema({
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String,
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true });
module.exports = mongoose.model('MenuItem', menuItemSchema);