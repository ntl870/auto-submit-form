const express = require("express");
const app = express();
const url = require("./url");
const schedule = require("node-schedule");
app.enable("trust proxy");
const request = require("request");

schedule.scheduleJob("00 00 01 * * *", () => {
  request({
    url: url,
    method: "GET",
  });
  console.log("submited");
});

let port = process.env.PORT;
if (!port) {
  port = 7000;
}

app.listen(port, () => {
  console.log("Server started successfully");
});
