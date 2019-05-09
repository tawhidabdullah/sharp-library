const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// if production then server statice production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("view/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("view", "build", "index.html"));
  });
}

const port = process.env.PORT || 1000;

app.listen(port, () => {
  console.log(`Hey Tawhid Abdullah, server is runnig on ${port}...`);
});
