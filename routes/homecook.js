const router = require("express").Router();
const homecookCtrl = require('../controllers/homecook');


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

router.get('/homecooks', isLoggedIn, homecookCtrl.index);

router.get('/homecooks/new', isLoggedIn, homecookCtrl.newDescription);

router.get('/homecooks/:id', isLoggedIn, homecookCtrl.showHomecook);

router.get('/homecooks/:id', isLoggedIn, homecookCtrl.editHomecook);

router.post('/homecooks', isLoggedIn, homecookCtrl.createDescription);

router.put('/homecooks/:id/edit', isLoggedIn, homecookCtrl.updateHomecook);

router.delete('/homecooks/:id', isLoggedIn, homecookCtrl.deleteHomecook);

module.exports = router;
