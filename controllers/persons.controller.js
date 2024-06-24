const express = require("express")
const personsData = require("../models/person.model.js")

const personsController = express.Router()

personsController.get("/", (req, res) => {
    res.send(personsData);
});


module.exports =  personsController
