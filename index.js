// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import * as fs from 'fs';
import path from 'path'; 
import generateMarkdown from './utils/generateMarkdown.mjs';

const prompt = inquirer.createPromptModule()
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Enter Project Title: ",
        name: 'title'
    },
    {
        type: 'input',
        message: "Description: ",
        name: 'description'
    },
    {
        type: 'input',
        message: "Installation Instructions: ",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Usage Information: ",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Contribution Guidelines: ",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "Test Instructions: ",
        name: 'test'
    },
    {
        type: 'list',
        message: "Choose a License: ",
        name: 'license',
        choices: ['MIT', 'Apache2.0', '0BSD', 'None']
    },
    {
        type: 'input',
        message: "GitHub Username: ",
        name: 'github'
    },
    {
        type: 'input',
        message: "Email Address: ",
        name: 'email'
    },  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await prompt(questions)
    const data = generateMarkdown(answers)
    writeToFile('README.md',data)
}

// Function call to initialize app
init();
