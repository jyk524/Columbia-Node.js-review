var fs = require("fs");
var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "username",
    },
    {
      type: "list",
      message: "What languages do you know?",
      name: "languages",
    },
    {
      type: "checkbox",
      message: "What is your preferred method of communciation?:",
      name: "preference",
      choices: ["Phone", "Email", "Carrier Pidgeon"],
    },
  ])

  .then(function (response) {
    fs.writeFile("log.txt", JSON.stringify(response), function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("Success!");
    });
  });
