var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Eliel, Silverio, Junior, fez, funcionar o deploy no herokito');
});

/* GET /users/listen listing. */
router.get('/listen', function(req, res, next) {
  res.send('Vamo dale pexeradaaaaa! frits');
});

module.exports = router;
