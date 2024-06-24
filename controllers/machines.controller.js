const express = require("express")

const machineData = require("../models/machine.model.js")


const machineController = express.Router()

machineController.get("/", (req, res) => {
    res.send(machineData);
});

module.exports =  machineController
