import { Router } from 'express';
import keystone from 'keystone';
// import { returnProducts } from '../actions/product';

export default () => {
  const api = Router();

  api.get('/', (req, res) => {
    res.append('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.append('Access-Control-Allow-Credentials', 'true');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    // res.json(returnProducts());

    keystone
      .list('Product')
      .model.find()
      .exec((err, products) => res.json(products));
  });

  return api;
};
