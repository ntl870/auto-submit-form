const express = require("express");
const app = express();
const schedule = require("node-schedule");
app.enable("trust proxy");
const { default: axios } = require("axios");

schedule.scheduleJob("40 37 18 * * *", () => {
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

app.listen(port, () => {
  console.log("Server started successfully");
});
