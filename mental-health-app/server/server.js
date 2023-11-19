const express = require("express");
const cors = require('cors');

const userService = require("./services/userService");
const communityService = require("./services/communityService");

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
    res.status(201).json({message: "User Created", user})
  } catch(err) {
    res.status(500).json({message: err.message})
  }
})

app.post("/addTopic", async (req, res) => {
  const { topic_name } = req.body
  try{
    const topic = await userService.addTopic(topic_name)
    res.status(201).json({message: "Topic Created", topic})
  }catch(err){
    res.status(500).json({message: err.message})
  }
})

app.post("/addPost", async (req,res) => {
  const {title, content, tags, user_id, is_private} = req.body
  console.log("request body",req.body)
  try{
    const post = await userService.addPost(title, content, user_id, is_private)
    console.log(post)
    const postTopics = await communityService.postTopics(parseInt(tags), post.id)
    console.log(postTopics)
    res.status(201).json({message: "Post Created Succesfully", post, postTopics})
  }catch(err){
    res.status(500).json({message: err.message})
  }
})

app.get("/topics", async (req, res) => {
  try{
    const topics = await communityService.getAllTopics();
    res.status(200).json({message: "Returned All Topics", topics})
  }catch(err){
    res.status(500).json({message: err.message})
  }
})

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
})