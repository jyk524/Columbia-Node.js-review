// dependencies / installs
// const fs
const fs = require("fs");
// const inquirer (check)
const inquirer = require("inquirer");
// const util
const util = require("util");
// promisify
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// NPM install

// array of questions (async)

// ---User Input prompts
// ---name
// ---location
// ---bio
// ---Linkedin URL
// ---github URL

const questions = [
  {
    type: "input",
    message: "Como te llamas?",
    name: "name",
  },
  {
    type: "input",
    message: "Donde Estas?",
    name: "location",
  },
  {
    type: "input",
    message: "Quien Es?",
    name: "bio",
  },
  {
    type: "input",
    message: "Que es su Linkedin?",
    name: "Linkedin",
  },
  {
    type: "input",
    message: "Que es su Github profile?",
    name: "github",
  },
  {
    type: "input",
    message: "Que es su email address?",
    name: "email",
  },
];

// helper functions
// HTML
// init - to initialize the program

async function init() {
  const answerList = await inquirer.prompt(questions);
  console.log("answerList = ", answerList);
  console.log("gen html = ", generateHtml(answerList));
}

init();

function generateHtml({ name }) {
  return `${name}`;
}

// ############ with info above, we will combine it with info underneath to create async await function ##################

// generate HTML (await) separate file
// helper file
// create index.HTML skeleton
// jQuery to target DOM elements
// add text to targets, populate divs
