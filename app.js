const express = require("express");
const app = express();
const schedule = require("node-schedule");
app.enable("trust proxy");
const url = require("./url");
const { wakeDyno } = require("heroku-keep-awake");
const axios = require("axios");
app.get("/", (req, res) => {
  res.json("boom");
});
schedule.scheduleJob("00 00 01 * * *", () => {
  try {
    axios.get(url);
    console.log("submited");
  } catch (err) {
    console.log(err);
  }
});
const opts = {
  logging: true,
  stopTimes: { start: "02:00", end: "21:00" },
};
//schedule.scheduleJob("00 30 * * * *", () => {
//  wakeDyno("https://auto-submit-form.herokuapp.com/", opts);
//});
const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log("Server started successfully", port);
 // wakeDyno("https://auto-submit-form.herokuapp.com/", opts);
});
