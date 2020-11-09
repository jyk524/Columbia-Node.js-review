const axios = require("axios");

axios
  .get("https://www.omdbapi.com/?t=The%20Matrix&apikey=trilogy")
  .then(function (res) {
    const { data } = res;
    console.log(data);
  });
