// dependencies
const fs = require("fs");
const util = require("util");
const axios = require("axios");

// functions
// promise based function with until.promisify. apromise based version of fs.readfile/writefile

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

// Data requests
// creatinga  config object that has options, tells it to accept the data back in JSON format
const config = { headers: { accept: "application/json" } };

//gets data and lets us know we want JSON data back

axios.get("https://icanhazdadjoke.com/", config).then(function (res) {
  console.log(res.data);
  const { joke } = res.data;

  return appendFileAsync("jokes.txt", joke + "\n").then(function () {
    readFileAsync("jokes.txt", "utf8").then(function (data) {
      console.log("Saved dad jokes:");
      console.log(data);
    });
  });
});
