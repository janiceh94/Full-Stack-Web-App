const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/recipes', ctrl.recipes.idx);
router.get('/recipes/new', ctrl.recipes.newRecipe);
router.get('/:id', ctrl.recipes.show);
router.post('/recipes', ctrl.recipes.createRecipe);
router.get('/:id/edit', ctrl.recipes.edit);
router.put('/:id', ctrl.recipes.update);
router.delete('/:id', ctrl.recipes.deleteRecipe);

module.exports = router;

