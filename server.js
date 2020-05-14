const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/router");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", routes);

module.exports = app;
