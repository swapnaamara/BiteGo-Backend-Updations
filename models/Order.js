const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  items: [{ menuItem: String, qty: Number, price: Number }],
  totalAmount: Number,
  status: { type: String, enum: ['pending', 'accepted', 'cooking', 'out_for_delivery', 'delivered'], default: 'pending' },
  deliveryAddress: String
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);