const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    homecook: {type: Schema.Types.ObjectId, ref: "Homecook"},
    date: {type: Date},
    content: {type: String},
})

// Model
const Comment = mongoose.model("Comment", commentSchema)

// Export
module.exports = Comment;
