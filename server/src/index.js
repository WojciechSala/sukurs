import express from 'express';
import keystone from 'keystone';
import products from './routes/products';
import keys from './config/keys';

const app = express();

app.get('/', (req, res) => res.send('asd'));
app.listen(process.env.PORT || 8081);

app.use('/products', products());

keystone.init({
  'cookie secret': keys.cookie.secret,
  name: 'sukurs',
  'user model': 'User',
  'auto update': true,
  auth: true,
  'cloudinary config': 'cloudinary://api_key:api_secret@cloud_name'
});

keystone.import('models');
keystone.start();

// mongoose
//   .connect(keys.mongodb.DB, { useNewUrlParser: true })
//   .then(console.log('Connected successfully!'))
//   .catch(err => console.error('\nCan not connect to the database\n\n' + err));
