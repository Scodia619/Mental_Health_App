const express = require("express");
const cors = require('cors');

const userService = require("./services/userService");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors())

app.get("/api", (req, res) => {
  res.json({message: "Hello World!"})
})

app.post("/createUser", async (req, res) => {
  const { first_name, last_name, email, phone } = req.body;
  try{
    const user = await userService.createUser(first_name, last_name, email, phone)
    res.json({message: "User Created", user})
  } catch(err) {
    res.status(500).json({message: err.message})
  }
})

app.post("/addTopic", async (req, res) => {
  const { topic_name } = req.body
  try{
    const topic = await userService.addTopic(topic_name)
    res.json({message: "Topic Created", topic})
  }catch(err){
    res.status(500).json({message: err.message})
  }
})

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
})