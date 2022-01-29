const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeCookSchema = new Schema ({
    name: {type: String},
    username: {type: String, required: true},
    email: {type: String},
    recipe: {type: Schema.Types.ObjectId, ref: "Recipe"},
    comments: {type: Schema.Types.ObjectId, ref: "Comment"},
})

// Model
const Homecook = mongoose.model("Homecook", homeCookSchema)

// Export
module.export = Homecook;