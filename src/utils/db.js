const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27017/myDummyDb';

let options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};
module.exports = (url = dbURL, opts = options) => {
  return mongoose.connect(url, { ...opts, useNewUrlParser: true });
};
