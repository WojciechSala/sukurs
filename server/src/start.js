require('babel-register')({
  presets: [
    [
      'env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
});

module.exports = require('./index.js');
