const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());

const filePath = "./data/cars.json";

app.get("/cars", (req, res) => {
  const cars = JSON.parse(fs.readFileSync(filePath));
  res.json(cars);
});

app.post("/cars", (req, res) => {
  const cars = JSON.parse(fs.readFileSync(filePath));
  const newCar = req.body;
  newCar.id = cars.length + 1;
  cars.push(newCar);
  fs.writeFileSync(filePath, JSON.stringify(cars, null, 2));
  res.status(201).send("Car added.");
});

app.put("/cars/:id", (req, res) => {
  const cars = JSON.parse(fs.readFileSync(filePath));
  const id = parseInt(req.params.id);
  const index = cars.findIndex(c => c.id === id);
  if (index === -1) return res.status(404).send("Car not found.");
  cars[index] = { ...cars[index], ...req.body };
  fs.writeFileSync(filePath, JSON.stringify(cars, null, 2));
  res.send("Car updated.");
});

app.delete("/cars/:id", (req, res) => {
  let cars = JSON.parse(fs.readFileSync(filePath));
  const id = parseInt(req.params.id);
  cars = cars.filter(c => c.id !== id);
  fs.writeFileSync(filePath, JSON.stringify(cars, null, 2));
  res.send("Car deleted.");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));