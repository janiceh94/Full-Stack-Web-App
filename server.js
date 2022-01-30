require("dotenv").config()
// External Modules
const express = require('express');
const methodOverride = require('method-override');

// Internal Modules
const routes = require('./routes');
const PORT = process.env.PORT || 3000
// Instanced Module
const app = express();

// Middleware
//app.use("/", routes.index);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"))


// App Configurations
app.set('view engine', 'ejs');

// Routes
/* app.get('/', function(req, res) {
    res.send('<h1>Hello World</h1>')
    }); */
app.get('/', (req, res) => {
    res.render('index');

})
// Listener
app.listen(PORT, function () {
    console.log(`Server is live on http://localhost: ${PORT}`);
})
module.exports.app;
