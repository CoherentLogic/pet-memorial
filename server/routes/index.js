var express = require('express');
var router = express.Router();

router.get('/data/config', function(req, res, next) {
    console.log("/data/config");
});

module.exports = router;
