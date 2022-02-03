const router = require("express").Router();
const homecookCtrl = require('../controllers/homecook');


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

router.get("/homecooks", isLoggedIn, homecookCtrl.index);

router.get('/homecooks/:id', isLoggedIn, homecookCtrl.showHomecook);

router.get('/homecooks/:id/edit', isLoggedIn, homecookCtrl.editHomecook);

router.post("/facts", isLoggedIn, homecookCtrl.editHomecook);

router.put('/homecooks/:id', isLoggedIn, homecookCtrl.updateHomecook);



module.exports = router;
