const express = require("express")
const plansData = require('../models/plan.model.js')

const plansController = express.Router()

plansController.get("/", (req, res) => {
    res.send(plansData);
});

module.exports = {
    plansController
}