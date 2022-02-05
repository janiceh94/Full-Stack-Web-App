const router = require('express').Router();
const ctrl = require('../controllers');

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

router.get('/recipes', isLoggedIn, ctrl.recipes.idx);
router.get('/recipes/new', isLoggedIn, ctrl.recipes.newRecipe);
router.get('/recipes/:id', isLoggedIn, ctrl.recipes.show);
router.post('/recipes', isLoggedIn, ctrl.recipes.createRecipe);
router.get('/recipes/:id/edit', isLoggedIn, ctrl.recipes.edit);
router.put('/recipes/:id', isLoggedIn, ctrl.recipes.update);
router.delete('/recipes/:id', isLoggedIn, ctrl.recipes.deleteRecipe);

module.exports = router;

