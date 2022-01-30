const Homecook = require("../models/Homecook")

// Google oath
function index(req, res, next) {
    Homecook.find({}, function(err, homecook) {
     res.render('homecook/index', {
      homecook,
      user: req.user
      });
    });
}

module.export = index;