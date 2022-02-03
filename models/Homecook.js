const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const factSchema = new moongoose.Schema({
    text: String
});

const homecookSchema = new Schema ({
    name: {type: String},
    googleId: {type: String},
    username: {type: String, required: true},
    email: {type: String},
    facts: [factSchema],
    recipe: {type: Schema.Types.ObjectId, ref: "Recipe"},
    comments: {type: Schema.Types.ObjectId, ref: "Comment"},
})

// Model
const Homecook = mongoose.model("Homecook", homecookSchema)

// Export
module.exports = Homecook;
