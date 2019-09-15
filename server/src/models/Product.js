import keystone from 'keystone';

const Product = new keystone.List('Product', {
  // map: { name: 'title' },
  singular: 'Product',
  plural: 'Products',
  autokey: { path: 'slug', from: 'name', unique: true }
});

const storage =  new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: 'uploads/products',
    publicPath: '/public/uploads/',
  }
});

Product.add({
  name: {
    type: String,
    required: true,
    initial: true
  },

  image: {
    type: keystone.Field.Types.File,
    required: true,
    initial: true,
    unique: true,
    storage: storage
  },

  date: {
    type: Date,
    required: true,
    default: Date.now
  },

  price: {
    type: Number,
    required: true,
    initial: true
  },

  sizes: {
    type: keystone.Field.Types.TextArray,
    required: true,
    initial: true
  },

  description: {
    type: String,
    required: true,
    initial: true
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
    type: String,
    required: true,
    initial: true
  },

  material: {
    type: String,
    required: true,
    initial: true
  },

  sizeTable: {
    type: String,
    required: true,
    initial: true
  }
});

Product.register();
