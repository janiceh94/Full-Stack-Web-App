require("dotenv").config()
// External Modules
const express = require('express');
const methodOverride = require('method-override');
const session = require("express-session");
const passport = require("passport");

// Internal Modules
const routes = require('./routes');
const PORT = process.env.PORT || 3000
// Instanced Module
const app = express();

    // Requires
require("./config/database");
require("./config/passport");


// Middleware
//app.use("/", routes.index);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"))
    // Body-Parsing Middleware
app.use(
    session({
        secret: "BUNBUNSYUMYUM!",
        resave: false,
        saveUninitialized: true,
    })
)
    // Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


// App Configurations
app.set('view engine', 'ejs');


// Listener
app.listen(PORT, function () {
    console.log(`Server is live on http://localhost: ${PORT}`);
})
module.exports.app;
