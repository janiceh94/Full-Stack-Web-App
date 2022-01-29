const mongoose = require('mongoose');
const db = mongoose.connection;
const dbURL = process.env.MONGO_URL;
const Schema = mongoose.Schema;

mongoose
    .connect(dbURL)
    .then(() =>
        console.log(`MongoDB successfully connected at ${db.host}:${db.port}!`)
    )
    .catch((err) => console.log(`MongoDB connection FAILED :( Error: ${err})`));

// Schemas
const userSchema = new Schema ({
    name: {type: String},
    username: {type: String, required: true},
    email: {type: String},
    posts: {type: Schema},
    comments: {type: Schema},
})

const commentSchema = new Schema ({
    user: {type: Schema},
    date: {type: Date},
    content: {type: String},
})

const postSchema = new Schema ({
    title: {type: String, required: true},
    user: {type: Schema},
    content: {type: String},
})

const likeSchema = new Schema ({
    post: {type: Schema},
    likes: {type: Schema}
})

// Model
const User = mongoose.model("User", userSchema)
const Comment = mongoose.model("Comment", commentSchema)
const Post = mongoose.model("Post", postSchema)
const Like = mongoose.model("Like", likeSchema)

// Export
module.export = {
    User,
    Comment,
    Post,
    Like,
};
