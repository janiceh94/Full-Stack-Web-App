const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/recipes', ctrl.recipes.idx);
router.get('/recipes/new', ctrl.recipes.newRecipe);
router.get('/recipes/:id', ctrl.recipes.show);
router.post('/recipes', ctrl.recipes.createRecipe);
router.get('/recipes/:id/edit', ctrl.recipes.edit);
router.put('/recipes/:id', ctrl.recipes.update);
router.delete('/recipes/:id', ctrl.recipes.deleteRecipe);

module.exports = router;

