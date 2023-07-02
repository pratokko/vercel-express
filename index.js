const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello man");
});
app.get("/blog", (req, res) => {
  res.send(" this is the blog route");
});

app.listen(PORT, () => {
  console.log(`app now running on port ${PORT}`);
});
