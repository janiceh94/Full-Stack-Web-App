const router = require("express").Router();
const homecookCtrl = require('../controllers/homecook');
const recipeCtrl = require('../controllers/recipes');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

router.get("/homecooks", isLoggedIn, homecookCtrl.index);

router.post("/recipes", isLoggedIn, recipeCtrl.newRecipe);

router.delete("/recipes/:id", isLoggedIn, recipeCtrl.deleteRecipe);

module.exports = router;
