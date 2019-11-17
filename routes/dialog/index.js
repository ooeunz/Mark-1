var express = require('express');
var router = express.Router();

// /* GET users listing. */
router.use('/', require('./dialog'));


module.exports = router;
