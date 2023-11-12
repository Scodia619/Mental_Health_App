const express = require("express");
const app = express();
const PORT = 8080;


app.get("/api", (req, res) => {
  res.json({message: "Hello World!"})
})

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
})