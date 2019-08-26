// Dotenv is a simple way to allow you to create secret keys that your application needs to function and keep them from going public.// This is the setup to run our server
require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT || 8000;
// Sets up the Express App
const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

const exhbs = require('express-handlebars');
// This sets up and starts the handlebars engine.
app.engine("handlebars", exhbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars")
// This handles the incoming HTTP request and sends response back to the caller
require('./controllers/apiRoutes')(app)

// This get the requested data from the models, create an HTML page displaying the data, and return it to the user to view in the browser
require('./controllers/htmlRoutes')(app)

// Requiring our models for syncing
const db = require('./models');
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Running on PORT: " + PORT)
    })
})