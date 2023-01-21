const inquirer = require('inquirer');
const PromptQuestions = require('./lib/PromptQuestions');

const manager = [];
const members = [];

// Create a function to initialize app
function init() {

    const pq = new PromptQuestions(manager, members);
    pq.start();
}

// Function call to initialize app
init();