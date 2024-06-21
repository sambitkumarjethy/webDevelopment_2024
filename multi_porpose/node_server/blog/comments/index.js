const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const commentByPostId = {};

app.get("/post/:id/comments", (req, res) => {
  res.send(commentByPostId[req.params.id] || []);
});

app.post("/post/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentByPostId[req.params.id] || [];
  comments.push({ id: commentId, content });
  commentByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});
app.listen(4001, () => {
  console.log(`listining at port 4001`);
});
