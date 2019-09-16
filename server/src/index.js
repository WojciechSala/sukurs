import express from 'express';
import { Router } from 'express';
import keystone from 'keystone';
import products from './routes/products';
import keys from './config/keys';

const app = express();

//IGNORE FAVICON START
const api = Router();
//1
api.get('/favicon.ico', (req, res) => {
  res.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.append('Access-Control-Allow-Credentials', 'true');
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  res.sendStatus(204);
});

//2
function ignoreFavicon(req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({ nope: true });
  } else {
    next();
  }
}
app.use(ignoreFavicon);

//3
app.use(function(req, res, next) {
  if (req.originalUrl && req.originalUrl.split('/').pop() === 'favicon.ico') {
    return res.sendStatus(204);
  }
  return next();
});
//END

app.listen(process.env.PORT || 8081);
app.use('/products', products());

keystone.init({
  'cookie secret': keys.cookie.secret,
  name: 'sukurs',
  port: 8081,
  'user model': 'User',
  'auto update': true,
  auth: true
  // 'cloudinary config': 'cloudinary://api_key:api_secret@cloud_name',
  // 'session store': 'mongo'
});

keystone.import('models');
keystone.start();

// mongoose
//   .connect(keys.mongodb.DB, { useNewUrlParser: true })
//   .then(console.log('Connected successfully!'))
//   .catch(err => console.error('\nCan not connect to the database\n\n' + err));
