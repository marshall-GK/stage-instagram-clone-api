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
  res.status(200).json(data);
});

app.get("/userStory", (req, res) => {
  if(req?.query?.id) {
    const data = userStory.userStory()?.[res.query.id];
    if(data && data?.length) {
      res.status(200).json(data);
    } else {
      res.status(404).send(new Error('Invalid id'))  
    }
  } else {
    res.status(404).send(new Error('Please provide id'))
  }
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
