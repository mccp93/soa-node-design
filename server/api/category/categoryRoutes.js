var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./categoryController');

// setup boilerplate route jsut to satisfy a request
// for building
router.route('/')
  .get(function(req, res){
    logger.log('Hey from user!!');
    res.send({ok: true});
  });

router.route('/')
  .get(controller.get)
  .post(controller.post);

router.route('/:id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.delete);

module.exports = router;
