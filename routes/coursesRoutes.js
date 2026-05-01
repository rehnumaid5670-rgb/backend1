// routes/courses.js
const express = require("express");
const router = express.Router();

// Example: GET top courses
router.get("/top", (req, res) => {
  res.json([
    {
      _id: "1",
      title: "React for Beginners",
      instructor: "John Doe",
      url: "https://example.com/course/react",
      image: "https://via.placeholder.com/200x100"
    },
    {
      _id: "2",
      title: "Advanced Node.js",
      instructor: "Jane Smith",
      url: "https://example.com/course/node",
      image: "https://via.placeholder.com/200x100"
    }
  ]);
});

module.exports = router;