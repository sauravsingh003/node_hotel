const mongoose = require('mongoose');

// Define the menu schema
const menuItemSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    taste: {
      type: String,
      enum: ['sweet', 'sour', 'spicy'],
      required: true
    },
    is_drink: {
      type: Boolean,
      default: false
    },
    ingredients: {
      type: [String],
      default: []
    },
    num_sales: {
      type: Number,
      dafault: 0
    }
});

// Create Person Mdoel
const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;