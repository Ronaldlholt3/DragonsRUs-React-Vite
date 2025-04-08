const mongoose = require('mongoose');

const potionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a potion name"],
  },
  price: {
    type: Number,
    required: [true, "Please enter a price"],
    min: [0, "Price must be a positive number"]
  },
  description: {
    type: String,
    required: [true, "Please enter a potion description"],
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the Potion model
const Potion = mongoose.model('Potion', potionSchema);

module.exports = Potion;


