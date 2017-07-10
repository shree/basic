var path = require('path');
var router = require('express').Router();

router.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

router.get('/logout', function(req, res){
  req.logout();
  req.session.destroy(function (err) {
    res.redirect('/'); //Inside a callback… bulletproof!
  });
});

module.exports = router;
