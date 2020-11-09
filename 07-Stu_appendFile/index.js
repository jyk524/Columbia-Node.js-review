// require the package that has the functions, dependency. Node module
var fs = require("fs");
// fs.appendFile - appends to ("target", "what to add". function(err))
fs.appendFile("message.txt", "\n" + process.argv[2], function (err) {
  if (err) {
    return console.log(error);
  }
  console.log("message.txt");
});
