const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  delivery: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Orders', OrderSchema);
