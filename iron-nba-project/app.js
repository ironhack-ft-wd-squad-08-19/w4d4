const express = require("express");

const app = express();

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  const options = {
    name: "Jane Doe",
    escapedText: "<span>this is a test</span>",
    lastName: [1, 2],
    cities: ["Berlin", "Amsterdam", "Lisbon", "Barcelona", "Madrid"]
  };
  res.render("index.hbs", options);
});

app.listen(3000);
