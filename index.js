const express = require("express");
const userStory = require("./imagesList");
const userStoryAvatarList = require("./userStoryList");
const app = express();

app.get("/userStoryList", (req, res) => {
  const data = userStoryAvatarList.statusCarousel();
  res.json(data);
});

app.get("/userStory", (req, res) => {
  const data = userStory.userStory();
  res.json(data);
});

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
