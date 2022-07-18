const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

const apiData = require("./data.json");

app.get("/", (req, resp) => {
  resp.send("Hello I am Live");
});

app.get("/service", (req, resp) => {
  resp.send(apiData);
});

app.listen(port, () => {
  console.log("I am Live Again");
});
