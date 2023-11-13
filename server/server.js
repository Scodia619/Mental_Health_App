const express = require("express");
const {PrismaClient} = require('@prisma/client')
const cors = require('cors');
const { createUser } = require("./users/create-user");
const app = express();
const PORT = 8080;

const prisma = new PrismaClient();

app.use(express.json());
app.use(cors())

app.get("/api", (req, res) => {
  res.json({message: "Hello World!"})
})

app.post("/createUser", (req, res)=>{
  createUser(req, res)
})

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
})