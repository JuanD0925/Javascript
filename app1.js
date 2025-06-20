const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Group Members</h1>
    <ul>
      <li>Juan Angarita</li>
      <li>Juan Camargo</li>
    </ul>
  `);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));