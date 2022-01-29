const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema ({
    title: {type: String, required: [true, "You must provide a title to your recipe"]},
    homeCook: {type: Schema.Types.ObjectId, ref: "Homecook"},
    content: {type: String},
})

// Model
const Recipe = mongoose.model("Recipe", recipeSchema)

// Export
module.export = Recipe;
