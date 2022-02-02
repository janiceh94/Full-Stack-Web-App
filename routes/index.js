const router = require('express').Router();
const ctrl = require('../controllers/index');
const passport = require('passport');

// Google Oauth Route
router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

// Google OAuth callback route
router.get(
    "/oauth2callback",
    passport.authenticate("google", {
        successRedirect: "/homecooks",
        failureRedirect: "/",
    })
);

// OAuth logout route
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

router.get("/", function (req, res) {
    res.render("index", {
      user: req.user,
    });
  });
  
  module.exports = router;