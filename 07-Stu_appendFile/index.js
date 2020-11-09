const fs = require("fs");

fs.appendFile("message.txt", process.argv[2] + "\n", function(err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Commit Logged!")
  }
})