const NodeCache = require('node-cache');

// stdTTL: time to live in seconds for every generated cache element.
const cache = new NodeCache({ stdTTL: 5 * 60 });
const randomstring = require('randomstring');

const getUrlFromRequest = req => {
  const url = req.originalUrl;
  return url;
};

const set = (req, res, next) => {
  const url = getUrlFromRequest(req);
  cache.set(url, randomstring.generate());
  return next();
};

const get = (req, res, next) => {
  const url = getUrlFromRequest(req);
  const content = cache.get(url);
  if (content) {
    console.log('cache hit');
    return res.status(200).send(content);
  }
  console.log('cache miss');
  return next();
};

module.exports = { get, set, cache };
