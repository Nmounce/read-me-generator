// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([{
            name: 'title',
            message: 'What is the title of the Project?',
            type: 'input',
        },
        {
            name: 'description',
            message: 'Write a brief description of your application:',
            type: 'input',
        },
        {
            name: 'screenshot',
            message: 'Code screenshot: Insert the url or local path where image is located:',
            type: 'input',
        },
        {
            name: 'table',
            message: 'Which topics would you like to include in the README?',
            type: 'checkbox',
            choices: ['[Technologies](#technologies)', '[Prerequisites](#prerequisites)', '[Installation](#installation)', '[Usage](#usage)', '[Licensing](#licensing)', '[Project Status](#projectStatus)', '[Contributing](#contributing)', '[Test](#test)', '[Acknowledgements](#acknowledgements)', '[Questions](#questions)']
        },
        {
            name: 'technologies',
            message: 'Which technologies were used in the creation of this application?',
            type: 'checkbox',
            choices: ['* You are using a Linux, Mac or Windows machine.', '* You have a basic understanding of javascript.']
        },
        {
            name: 'prerequisites',
            message: 'Which prerequisites are required to run the application?',
            type: 'checkbox',
            choices: ['Ajax', 'Bootstrap', 'CSS', 'HTML', 'JavaScript', 'JQuery', 'Node.js', 'PHP', 'Python', 'Ruby']
        },
        {
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            type: 'input',
        },
        {
            name: 'usage',
            message: 'Provide instructions on how to use your project- TIP: include screenshots to show examples of the running project',
            type: 'input',
        },
        {
            name: 'licensing',
            message: 'Which license would you like to use for this application?',
            type: 'list',
            choices: ["Apache v2.0", "Creative Commons 1.0", "MIT", "The UnLicense"]
        },
        {
            name: 'projectStatus',
            message: 'What is he status of this project?',
            type: 'list',
            choices: ['In Progress', 'Complete']
        },
        {
            name: 'contributing',
            message: 'Would you like to include instructions on how to fork the repo via GitHub?',
            type: 'confirm',
        },
        {
            name: 'test',
            message: 'Describe and show how to run the tests',
            type: 'input',
        },
        {
            name: 'testSnippets',
            message: 'Insert the URL or local path for screenshots of your test code:',
            type: 'input',
        },
        {
            name: 'acknowledgements',
            message: 'Is there anyone you would like to acknowledge for aiding in the creation of this application?',
            type: 'confirm',
        },
        {
            name: 'ackInput',
            message: 'Whom would you like to acknowledge and why?',
            type: 'input',
        },
        {
            name: 'name',
            message: 'Insert your name',
            type: 'input',
        },
        {
            name: 'email',
            message: 'Insert your email address',
            type: 'input',
        },
        {
            name: 'git',
            placeholder: 'insert your GitHub account',
            type: 'input',
        },
    ]).then((data) => {
        console.log(data)
        var markdown = `# ${data.title}
${handleBadge(data.licensing)}

## Description
${data.description}
![](${!data.screenshot})

## Table of Contents
${data.table[0]}
${data.table[1]}
${data.table[2]}
${data.table[3]}
${data.table[4]}
${data.table[5]}
${data.table[6]}
${data.table[7]}
${data.table[8]}
${data.table[9]}

## Technologies
${data.technologies}

## Prerequisites
${data.prerequisites}

## Installation
${data.install}

## Usage
${data.usage}

## Licensing
${handleLicense(data.licensing)}

## Project Status
${data.projectStatus}

${handleContTable(data.contributing)}
${handleCont(data.contributing)}

## Tests
${data.tests}
![](${data.testSnippets})

## Acknowledgements
${data.ackInput}

## Questions
My name is ${data.name}
Reach me with additional questions: ${data.email}
Check out my GitHub: ${data.git}
        `
        fs.writeFileSync("YourReadMe.md", markdown);
    });


function handleBadge(info) {
    switch (info) {
        case "Apache v2.0":
            return apacheBadge;
        case "Creative Commons 1.0":
            return creativeBadge;
        case "MIT":
            return mitBadge;
        case "The Unlicense":
            return unBadge;
        default:
            return creativeBadge;
            break;
    }
}

function handleCont(info) {
    if (info === true) {
        return `Contribute to README Generator
            To contribute to README Generator, follow these steps:
                1. Fork this repository.
                2. Create a branch: git checkout -b <branch name>.
                3. Make your changes and commit them: git commit -m '<commit message>'.
                4. Push to the original branch: git push origin <project_name/<location>
                5. Create the pull request.
                Alternatively, see the Github documentation on creating a pull request.`
    } else {
        return ""
    }
}

function handleContTable(info) {
    if (info === true) {
        return '## Contributing'
    } else {
        return ""
    }
}


function handleLicense(info) {
    switch (info) {
        case "Apache v2.0":
            return apacheLink, apacheLicense;
        case "Creative Commons 1.0":
            return creativeLink, creativeLicense;
        case "MIT":
            return mitLink, mitLicense;
        case "The Unlicense":
            return unLink, unLicense;
        default:
            return creativeLink, creativeLicense;
            break;
    }
}


var apacheBadge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
var apacheLink = "https: //opensource.org/licenses/Apache-2.0"
var apacheLicense = "[APACHE] Licensed under the Apache License, Version 2.0(the 'License'); you may not use this file except in compliance with the License. You may obtain a copy of the License at 'http: //www.apache.org/licenses/LICENSE-2.0' Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.";

var creativeBadge = "![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)";
var creativeLink = "https: //creativecommons.org/publicdomain/zero/1.0/";
var creativeLicense = "[Creative Commons] CC0 1.0 Universal CREATIVE COMMONS CORPORATION IS NOT A LAW FIRM AND DOES NOT PROVIDE LEGAL SERVICES.DISTRIBUTION OF THIS DOCUMENT DOES NOT CREATE AN ATTORNEY - CLIENT RELATIONSHIP.CREATIVE COMMONS PROVIDES THIS INFORMATION ON AN 'AS-IS' BASIS.CREATIVE COMMONS MAKES NO WARRANTIES REGARDING THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS PROVIDED HEREUNDER, AND DISCLAIMS LIABILITY FOR DAMAGES RESULTING FROM THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS PROVIDED HEREUNDER.";

var mitBadge = "![License: MIT](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)"
var mitLink = "https://opensource.org/licenses/MIT"
var mitLicense = "[MIT] Copyright 'YEAR''COPYRIGHT HOLDER' Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files(the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and / or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.";


var unBadge = "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)"
var unLink = "[https://unlicense.org]/"
var unLicense = "[Unlicense] This is free and unencumbered software released into the public domain.Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non - commercial, and by any means. In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain.We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law. THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. For more information, please refer to 'http://unlicense.org/'.";