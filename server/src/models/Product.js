import keystone from 'keystone';

const Product = new keystone.List('Product', {
  map: { name: 'title' },
  singular: 'Product',
  plural: 'Products',
  autokey: { path: 'slug', from: 'title', unique: true }
});

Product.add({
  image: {
    type: keystone.Field.Types.CloudinaryImage,
    required: true,
    initial: true
  },

  title: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true,
    default: Date.now
  },

  price: {
    type: String,
    required: true,
    initial: true
  },

  sizes: {
    type: keystone.Field.Types.TextArray,
    required: true,
    initial: true
  },

  description: {
    type: String
  },

  colaborator: {
    type: String,
    required: true,
    initial: true
  },

  quantity: {
    type: Number,
    required: true,
    initial: true
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

Product.register();
