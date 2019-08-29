import express from 'express';
import mongoose from 'mongoose';

import products from './routes/products';
import keys from './config/keys';

const app = express();

app.get('/', (req, res) => res.send('asd'));
app.listen(process.env.PORT || 3001);

app.use('/products', products());

mongoose
  .connect(keys.mongodb.DB, { useNewUrlParser: true })
  .then(console.log('Connected successfully!'))
  .catch(err => console.error('\nCan not connect to the database\n\n' + err));
