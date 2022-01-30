const router = require("express").Router();
const homecookCtrl = require('../controllers/index');

router.get("/homecook", isLoggedIn, homecookCtrl.index);
router.post("/recipe", isLoggedIn, homecookCtrl.newRecipe);
router.delete("/recipe/:id", isLoggedIn, homecookCtrl.deleteRecipe);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.export