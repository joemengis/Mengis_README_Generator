const inquirer = require("inquirer");

const questions = [
{
    type: 'input',
    name: 'name',
    message: 'Enter the project name: ',
},
{
    type: 'input',
    name: 'description',
    message: 'Enter a project description: ',
},
{
    type: 'input',
    name: 'installation',
    message: 'Please enter the way to install dependencies: ',
},
{
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using this application: ',
},
{
    type: 'list',
    name: 'license',
    choices: ['Apache', 'MIT', 'GPL', 'BSD', 'None'],
    message: 'Enter the licesne type: '
},
{
    type: 'input',
    name: 'Contributing',
    message: 'What does the user need to know about contributing to this application: ',
},
{
    type: 'input',
    name: 'tests',
    message: 'What is the command for run tests: ',
},
{
    type: 'input',
    name: 'gitHubProfilePicture',
    message: 'Enter the URL for your Github profile picture here: ',
},
{
    type: 'input',
    name: 'gitHubEmail',
    message: 'Enter your Github email here: ',
},

];

function writeToFile(fileName, data) {
}

function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
    })
}

init();
