// The htmlRoutes.js renders the page to be displayed, gets info but doesn't modify the data

const db = require('../models');

module.exports = function (app) {
    // GET routes for displaying add homes and listings pages
    app.get("/", function (req, res) {
        db.House.findAll({
            raw: true,
            limit: 3,
            where: {
                isAvailable: 1,
                favorite: 1
            }
        }).then(function (data) {
            res.render("home", {
                house: data
            })
        })
    })
    // GET route for displaying add homes page
    app.get("/add", function (req, res) {
        db.Listing.findAll({})
            .then(function (data) {
                res.render("add", data)
            })
    })
    // GET route for displaying listings page
    app.get("/listing", function (req, res) {
        db.House.findAll({
                raw: true,
            })
            .then(function (data) {
                res.render("listing", {
                    house: data
                })
            })
    })
    // GET route for about page
    app.get("/about", function (req, res) {

        res.render("about")

    })

}