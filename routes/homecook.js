const router = require("express").Router();
const homecookCtrl = require('../controllers/homecook');


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

router.get("/homecooks", isLoggedIn, homecookCtrl.index);

router.post("/facts", isLoggedIn, homecookCtrl.editDescription);

router.delete("/facts/:id", isLoggedIn, homecookCtrl.updateDescription);

module.exports = router;
