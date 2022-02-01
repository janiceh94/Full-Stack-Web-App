const router = require("express").Router();
const homecookCtrl = require('../controllers/homecook');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

router.get("/homecook", isLoggedIn, homecookCtrl.index);

router.post("/recipe", isLoggedIn, homecookCtrl.newRecipe);

router.delete("/recipe/:id", isLoggedIn, homecookCtrl.deleteRecipe);

module.exports = router;