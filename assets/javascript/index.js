// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
var questions([
    {
        name: 'title',
        question: 'What is the title of the Project?',
        type: 'input',
    },
    {
        name: 'example1',
        question: 'Attach an image or snippet of an example of the code found in the application',
        type: 'input',
    },
    {
        name: 'features',
        question: 'What features does your application have?',
        type: 'input',
    },
    {
        name: 'example2',
        question: 'Attach an image or snippet of an example of the code found in the application',
        type: 'input',
    },
    {
        name: 'installation',
        question: 'Insert the commands that can be used to install this program',
        type: 'input',
    },
    {
        name: 'built-with',
        question: 'What technologies were used to build this application?',
        type: 'list',
        choices: [""]
    },
    {
        name: 'prerequisites',
        question: 'Indicate which (if any) system requirements, tools or global dependencies must be installed in order for a user to run/use code:',
        type: 'list',
        choices: ["Linux", "Windows", "Mac", ]
    },
    {
        name: 'contributing',
        question: 'Would you like to include instructions on how to fork the repo via GitHub?',
        type: 'confirm',
    },

    {
        name: 'project-status',
        question: 'Select the current phase of development for this application:',
        type: 'input',
    },
    {
        name: 'acknowledgements',
        question: 'Indicate any persons (if any) whom you would like to acknowledge for aiding with development or providing support, etc.',
        type: 'input',
    },
    {
        name: 'contact',
        question: 'Insert your name, github link, email address',
        type: 'list',
        choices:["Apache v2.0", "Boost Software 1.0", "GNU GplV3", "ISC", "MIT", "Mozilla Public 2.0", "The Unlicense"]
    },
    {
        name: 'licensing',
        question: 'Which license would you like to use for this application?',
        type: 'list',
        choices:["Apache v2.0", "Boost Software 1.0", "GNU GplV3", "ISC", "MIT", "Mozilla Public 2.0", "The Unlicense"]
});


.then(data => {
   console.info('Answer:', answers);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


