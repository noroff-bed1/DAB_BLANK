var express = require('express');
var router = express.Router();

/* GET hotels listing. */
router.get('/', async function(req, res, next) {
  res.render('index');
});


module.exports = router;