var fs = require("fs");

fs.writeFile("log.txt", process.argv[2], function(err) {

  if (err) {
    return console.log(err);
  }

  console.log("Success!");

});

// In terminal enter in $node index.js {*arguement here*}
  // this is to write the arguement into the log.txt