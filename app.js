const express = require("express");
const app = express();

const locationsController = require("./controllers/locations.controller");
const machinesController = require("./controllers/machines.controller");
const personsController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const specialEventsController = require("./controllers/special-events.controller");

// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// });

app.use("/locations", locationsController);
app.use("/machines", machinesController);
app.use("/persons", personsController);
app.use("/plans", plansController);
app.use("/special-events", specialEventsController);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use((req, res) => {
    res.status(404).send("Sorry, no page found!");
});

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

module.exports = app;
