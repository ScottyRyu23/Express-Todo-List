var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Todo List Tracker' });
});

module.exports = router;
