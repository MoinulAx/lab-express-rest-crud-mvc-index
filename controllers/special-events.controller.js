const express = require("express")
const specialEventData = require("../models/special-event.model.js")


const specialEventController = express.Router()

specialEventController.get("/", (req, res) => {
    res.send(specialEventData);
});


module.exports = specialEventController
