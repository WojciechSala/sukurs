import mongoose from 'mongoose';

let ProductSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  price: {
    type: String,
    required: true
  },

  sizes: [
    {
      type: Array,
      required: true
    }
  ],

  description: {
    type: String
  },

  colaborator: {
    type: String,
    required: true
  },

  quantity: {
    type: Number,
    required: true
  },

  color: {
    type: String
  },

  material: {
    type: String
  },

  sizeTable: {
    type: String
  }
});

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
