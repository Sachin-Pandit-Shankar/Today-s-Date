const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const timeDate = new Date();
  response.send(
    `${timeDate.getDate()}-${timeDate.getMonth() + 1}-${timeDate.getFullYear()}`
  );
});
module.exports = app;
