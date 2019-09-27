import express from 'express';
import { Router } from 'express';
import keystone from 'keystone';
import products from './routes/products';
import keys from './config/keys';

const app = express();

app.listen(process.env.PORT || 8081);
app.use('/products', products());

keystone.init({
  'cookie secret': keys.cookie.secret,
  name: 'sukurs',
  port: 3000,
  'user model': 'User',
  'auto update': true,
  auth: true
  // 'session store': 'mongo'
});

keystone.import('models');
keystone.start();
