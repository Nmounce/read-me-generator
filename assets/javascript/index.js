// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const prompts = require('prompts');
const fs = require('fs');
const myConsole = new console.Console(fs.createWriteStream('./log.txt'));

inquirer
    .prompt= ([
        {
            name: 'title',
            question: 'What is the title of the Project?',
            type: 'input',
        },
        {
            name: 'description',
            question: 'Write a brief description of your application:',
            type: 'input',
        },
        {
            name: 'usage',
            question: 'Enter usage instructions',
            type: 'input',
        },
        { //checkbox
            name: 'contributing',
            question: 'Would you like to include instructions on how to fork the repo via GitHub?',
            type: 'confirm',
        },
        {
            name: 'test',
            question: '',
            type: '',
            choices: ["]
        },
        { //multi-select
            name: 'licensing',
            question: 'Which license would you like to use for this application?',
            type: 'list',
            choices:["Apache v2.0", "Boost Software 1.0", "GNU GplV3", "ISC", "MIT", "Mozilla Public 2.0", "The Unlicense"]
        },
        { //multi-prompt
            name: 'contact',
            question: 'Insert your name, github link, email address',
            type: 'list',
        },
    ]).then((data) => {
        const fileName = `${data.name.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });


//     const container = document.querySelector(".read-me-generator");
//     response.forEach((result) => {
//     const content = document.createElement("div");
//     content.classList = "sections";
//     const layout = `
//             <h2 class="question">${result.question}</h5>
//             <p class="answer">${result.response}</p>`;

//   container.innerHTML += layout;
});




// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


