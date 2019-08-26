// The APIRoutes.js updates and goes to html routes, also updates database and tells us what page to load

// Requiring our models
const db = require('../models')

module.exports = function (app) {
    // GET route for getting all of the addlisting
    app.post("/api/addlisting", function (req, res) {
        db.House.create(req.body)
            .then(function (dbData) {
                res.redirect("/listing")
            })
    })
// GET route for getting all of the deletelisting
    app.get("/api/deleteListings", function (req, res) {
        db.House.destroy({
            where: {
                isAvailable: 0
            }
        }, {
            truncate: true
        }).then(function (data) {
            res.redirect("/listing")
        })
    });
 // POST route for saving a new sold house
    app.post("/api/sellhouse", function (req, res) {
        db.House.update({
            isAvailable: 0,
            favorite: 1
        }, {
            where: {
                id: req.body.id.split("/")[0]
            }
        }).then(function (data) {
            console.log(data)
            res.redirect("/listing")
        })
    })
    // POST route for saving a new favorite house
    app.post("/api/addfav", function (req, res) {
        db.House.update({
            favorite: 1
        }, {
            where: {
                id: req.body.id.split("/")[0]
            }
        }).then(function (data) {
            console.log(data)
            res.redirect("/listing")
        })
    })
    // POST route for deleting a favorite house
    app.post("/api/dropfav", function (req, res) {
        db.House.update({
            favorite: 0
        }, {
            where: {
                id: req.body.id.split("/")[0]
            }
        }).then(function (data) {
            console.log(data)
            res.redirect("/listing")
        })
    })
    // POST route for removing house
    app.post("/api/removehouse", function (req, res) {
        db.House.destroy({
            where: {
                id: req.body.id.split("/")[0]
            }
        }).then(function (data) {
            console.log(data)
            res.redirect("/listing")
        })
    })
}