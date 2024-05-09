var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

router.get('/', async function(req, res, next) {
  res.render('hotels');
});

module.exports = router;
