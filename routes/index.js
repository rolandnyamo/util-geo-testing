var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Traffic Manager Geo', region: process.env.REGION });
});

module.exports = router;
