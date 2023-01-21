const inquirer = require('inquirer');
const PromptQuestions = require('./lib/PromptQuestions');

const manager = [];
const members = [];

// Create a function to initialize app
function init() {

    const pq = new PromptQuestions(manager, members);

    pq.start();

    // userInputCollections.then((data) => {
    // console.log(data);
    // const readMeContent = generateMarkdown(data);
    // const filePathAndName = './sample/README.md';

    // writeToFile(filePathAndName, readMeContent);
    // });
}

// Function call to initialize app
init();