// Depencies
const fs = require("fs");
const util = require("util");
const axios = require("axios");

// Functions
const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

// Data requests
const config = { headers: { accept: "application/json" } };

// make an api request
axios
  .get("https://icanhazdadjoke.com/", config)
  // get the joke and append it to our file
  .then(function (res) {
    console.log(res.data);
    const { joke } = res.data;

    return appendFileAsync("jokes.txt", joke + "\n");
  })
  // read the joke file
  .then(function () {
    return readFileAsync("jokes.txt", "utf8");
  })
  // log the output of the joke file
  .then(function (data) {
    console.log("Saved dad jokes:");
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
