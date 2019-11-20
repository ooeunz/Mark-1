var express = require('express');
var router = express.Router();


/* GET users listing. */
router.use('/', require('./dialog'));
router.get('/', (req, res) => {
    res.send("connect success!");
});


module.exports = router;
