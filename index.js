const express = require("express");
const posts = require("./data/postsData");

const app = express();
const port = 3000;
const urlPort = "http://localhost:" + port;
console.log("url " + urlPort);

app.use(express.static("./public"));

// Rotta /
app.get("/", (req, res) => {
  const responseData = {
    message: "Server del mio blog",
    success: true,
  };
  res.status(200).json(responseData);
});

// Rotta /bacheca
app.get("/bacheca", (req, res) => {
  const responseData = {
    posts: posts,
    success: true,
  };
  res.status(200).json(responseData);
});

// Avvio Server
app.listen(port, () => {
  console.log("Server avviato");
});
