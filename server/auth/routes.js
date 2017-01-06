
var router = require('express').Router();
var controller = require('./controller');

router.post('/signin', controller.signin);

module.exports = router;