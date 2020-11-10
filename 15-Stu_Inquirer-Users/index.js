// This function will ask questions and then output the data into a JSON file
// based off the user's name
// The file will include all data in JSON format with tabs

const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
    // Question for Name
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    // Question for Stack/Languages
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: [
        'HTML',
        'CSS',
        'Javascript',
        'MySQL'
      ]
    },
    // Question for Contact Info
    {
      type: 'rawlist',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['Email', 'Phone', 'Video Chat']
    },
  ]).then(function(data){
    
    // Create Filename from data.name from inquirer first question
    // lowercase, split, and join to put first and last name together no spaces
    let filename = data.name.toLowerCase().split(' ').join('') + '.json';
    
    // Fileserver writes a file using filename, and JSON.stringify turns a string into an object
    // uses the data from above [in function (data)], replaces nulls, and adds tabs (\t)
    // err function added incase of error, else console will log success!
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err){
      if (err) {
        return console.log(err);
      }
      console.log('Success!');
    })
  })
