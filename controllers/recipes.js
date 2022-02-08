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
        db.Homecook.find({}, (err, foundHomecooks) => {
            if(err) res.send(err);
            res.render('recipes/index', {
                recipes: foundRecipes,
                homecook: foundHomecooks,
                user: req.user,
            });
        });
    });
};

// New
const newRecipe = (req, res) => {
    
    db.Recipe.find({}, (err, foundRecipe) => {
        if (err) res.send (err);
        const context = {recipe: foundRecipe};
        res.render("recipes/new", {
            user: req.user,
            context,
        })
    });
};

// Create
const createRecipe = (req, res) => {
    db.Recipe.create(req.body, (err, createdRecipe) => {
        if(err) return res.send(err);

        db.Homecook.findById(createdRecipe.homecook).exec( function (err, foundHomecook) {
            if (err) res.send(err);
            foundHomecook.recipe.push(createdRecipe);
            foundHomecook.save();
            res.redirect('/recipes');
        })
    })
}

// Show
const show = (req, res) => {
    db.Recipe.findById(req.params.id, (err, foundRecipe) => {
        if(err) return res.send(err);
        db.Homecook.find({}, (err, foundHomecooks) => {
            if(err) res.send(err);
            res.render('recipes/show', {
                recipe: foundRecipe,
                homecook: foundHomecooks,
                user: req.user,
            });
        });
    });
};

//Edit
const edit = (req, res) => {
    db.Recipe.findById(req.params.id, (err, foundRecipe) => {
        if (err) res.send(err);
        const context = {recipe: foundRecipes};
        res.render("recipes/edit", context)
    });
};

// Update
const update = (req, res) => {
    db.Recipe.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                ...req.body,
            },
        },
        {new: true},
        (err, updatedRecipe) => {
            if(err) res.send(err);
            res.redirect(`/recipes/${updatedRecipe._id}`);
        }
    );
};

//Delete
const destroy = (req, res) => {
    db.Recipe.findByIdAndDelete(req.params.id, (err, deletedRecipe) => {
        if(err) res.send(err);

        db.Homecook.findById(deletedRecipe.homecook).exec(function (err, foundHomecook) {
            foundHomecook.recipe.remove(deletedRecipe);
            foundHomecook.save();
            res.redirect('/recipes');
        });
    });
};


module.exports = {
    idx,
    newRecipe,
    show,
    edit,
    update,
    createRecipe,
    deleteRecipe: destroy,
}