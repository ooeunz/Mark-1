var express = require('express');
var router = express.Router();

// /* GET users listing. */
router.use('/dialog', require('./dialog'));


module.exports = router;
