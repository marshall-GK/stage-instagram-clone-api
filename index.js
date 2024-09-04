const express = require("express");
const cors = require('cors');
const userStory = require("./imagesList");
const userStoryAvatarList = require("./userStoryList");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: '*',
}));

app.get("/userStoryList", (req, res) => {
  const data = userStoryAvatarList.statusCarousel();
  res.json(data);
});

app.get("/userStory", (req, res) => {
  const data = userStory.userStory();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
