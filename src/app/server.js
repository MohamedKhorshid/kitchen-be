const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./models");


db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./routes/turorial.routes.js")(app);
// set port, listen for requests
const PORT = 3000;

app.listen(PORT, "0.0.0.0");
console.log(`Serverrrrrrr is running on port ${PORT}.`);