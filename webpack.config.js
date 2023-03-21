const Dotenv = require('dotenv-webpack');

module.exports = {
  // other webpack configuration options
  plugins: [
    new Dotenv()
  ]
};
