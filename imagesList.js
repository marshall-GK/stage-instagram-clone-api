const userStory = () => ({
  1: [
    {
      id: "1s1",
      s1: "/images/story2.jpg",
      timer: 3000,
    },
  ],
  2: [
    {
      id: "2s1",
      s1: "/images/story3.jpg",
      timer: 8000,
    },
  ],
  3: [
    {
      id: "3s1",
      storyUrl: "/images/story5.jpg",
      timer: 5000,
    },
    { id: "3s2", storyUrl: "/images/story1.jpg", timer: 7000 },
  ],
  4: [
    {
      id: "4s1",
      storyUrl: "/images/story3.jpg",
      timer: 5000,
    },
    { id: "4s2", storyUrl: "/images/story2.jpg", timer: 7000 },
  ],
});

module.exports.userStory = userStory;
