// TODO: Include packages needed for this application
const { createPromptModule } = require('inquirer');


const prompt = createPromptModule()
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
        choices: ['MIT', 'Apache-2.0', '0BSD', 'None']
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
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
async function init() {
    const answers = await prompt(questions)
    console.log(answers)
}

// Function call to initialize app
init();
