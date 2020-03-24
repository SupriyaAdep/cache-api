const Router = require('express');
const controllers = require('./dummy.controllers');
const cache = require('../../middleware/cache'); //import our cache middleware

let router = Router();

// /api/keys
router
  .route('/api/keys')
  .get(cache.get, cache.set, controllers.getMany)
  .post(controllers.createOne);

// /api/keys/:id
router
  .route('/api/keys/:id')
  .get(cache.get, cache.set, controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne);

module.exports = router;
