const db = require("../models")

//Rest Routes
/*
Create/new - POST - /recipes - receive data from new route to create an article
Edit - GET - /recipes/:id/edit - allow to edit a form
Show - GET - /recipes/:id - present an existing recipe
Index - GET - /recipe - Show all recipes
*/

// Index
const idx = (req, res) => {
    db.Recipe.find({}, (err, foundRecipes) => {
        if (err) res.send(err);
        const context = {recipes: foundRecipes};
        res.render("recipes/index", context)
    });
};

// New
const newRecipe = (req, res) => {
    db.Recipe.find({}, (err, foundRecipes) => {
        if (err) res.send(err);
        const context = {recipes: foundRecipes};
        res.render("recipes/new", context)
    });
};

// Show
const show = (req, res) => {
    db.Recipe.findbyId(req.params.id)
        .populate("recipes")
        .exec((err, foundRecipe) => {
            if (err) res.send(err);
            const context = {recipes: foundRecipes};
            res.render("recipes/show", context)
        })
}

//Edit
const edit = (req, res) => {
    db.Recipe.findbyId(req.params.id, (err, foundArticle) => {
        if (err) res.send(err);
        const context = {recipes: foundRecipes};
        res.render("recipes/edit", context)
    });
};

module.exports = {
    idx,
    newRecipe,
    show,
    edit,
}