var express = require('express');
var router = express.Router();

/* GET home page. This index create By zemeister*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jonli Toplar' });
});

module.exports = router;
