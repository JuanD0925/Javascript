const express = require("express");
const app = express();
const fs = require("fs");

app.get("/cars", (req, res) => {
  fs.readFile("./data/cars.json", "utf-8", (err, data) => {
    if (err) return res.status(500).send("Error reading file.");
    res.send(data);
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000/cars"));