// Dependencies
// inquirer - for terminal prompts
var inquirer = require("inquirer");
// fs - for file writing
var fs = require("fs");

// User Input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "list",
      message: "What languages would you know?",
      name: "language",
      choices: ["Javascript", "Python", "C#"],
    },
    {
      type: "checkbox",
      message: "What is your preferred communication method?",
      name: "commMethod",
      choices: ["Phone", "Email", "Carrier Pigeon"],
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
