const express = require("express");
const app = express();
const schedule = require("node-schedule");
app.enable("trust proxy");
const { wakeDyno } = require("heroku-keep-awake");
const axios = require("axios");
const date = new Date();

schedule.scheduleJob("50 22 19 * * *", () => {
  try {
    axios.get(
      "https://docs.google.com/forms/d/e/1FAIpQLSd9XF2Vuhs6mGPAbw-1n7tKcPu00Mn6i7VHNGCkTy8aHRYoFQ/formResponse?entry.1331773320=Long&entry.140077259=Nguyen"
    );
    console.log("submited");
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 7000;
const opts = {
  stopTimes: { start: "02:00", end: "21:00" },
};
app.listen(port, () => {
  console.log("Server started successfully", port);
  wakeDyno("https://auto-submit-form.herokuapp.com/", opts);
});
