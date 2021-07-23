const express = require("express");
const app = express();
const schedule = require("node-schedule");
app.enable("trust proxy");
const axios = require("axios");
const { wakeDyno } = require("heroku-keep-awake");
const request = require("request");

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log("Server started successfully", port);
  wakeDyno("https://auto-submit-form.herokuapp.com/");
});


schedule.scheduleJob("20 13 19 * * *", () => {
  // axios.get(
  //   "https://docs.google.com/forms/d/e/1FAIpQLSd9XF2Vuhs6mGPAbw-1n7tKcPu00Mn6i7VHNGCkTy8aHRYoFQ/formResponse?entry.1331773320=Long&entry.140077259=Nguyen"
  // );
  request({
    url: "https://docs.google.com/forms/d/e/1FAIpQLSd9XF2Vuhs6mGPAbw-1n7tKcPu00Mn6i7VHNGCkTy8aHRYoFQ/formResponse?entry.1331773320=Long&entry.140077259=Nguyen",
    method: "GET",
  });
  console.log("submited");
});


// const opts = {
//   stopTimes: { start: "02:00", end: "21:00" },
// };

