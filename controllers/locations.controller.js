const express = require("express");
const locationData = require("../models/location.model.js");

const locationController = express.Router();

locationController.get("/", (req, res) => {
    res.send(locationData);
});

module.exports = locationController;
