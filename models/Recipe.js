const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema ({
    name: {type: String, required: [true, "You must provide a title to your recipe"]},
    yield: {type: Number},
    photo: {type: String},
    instructions: {type:String},
    preparation: {type: String},
    homeCook: {type: Schema.Types.ObjectId, ref: "Homecook"},
},{
    timestamps: true
})
// Model
const Recipe = mongoose.model("Recipe", recipeSchema)

// Export
module.exports = Recipe;
