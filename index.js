const inquirer = require('inquirer');
const PromptQuestions = require('./lib/PromptQuestions');
const Manager = require('./lib/Manager');

const managerInput = [];
const subordinate = [];

// Create a function to initialize app
function init() {

    const pq = new PromptQuestions();

    pq.promptInitialQuestions().then(() => pq.promptChoiceQuestion())
                               .then((data) => pq.decideWhatIsNextStep(data.choice))
                            

    /*
    const promptQuestions = new PromptQuestions();
    const initialQuestion = promptQuestions.getInitialQuestions();
    const incomingQuestion = promptQuestions.getIncomingQuestions();

    const userData = inquirer.prompt(initialQuestion);
    userData.then((data) => {
        console.log("<--------start 1st-------->");
        console.log(data);

        const managerObj = new Manager(data.userName, data.userId, data.userEmail, data.officeNumber);
        managerInput.push(managerObj);

        console.log(managerInput);
        console.log("<--------end 1st-------->");
    }).then(() => {
        console.log("<--------start 2nd-------->");

        return inquirer.prompt(incomingQuestion);
    }).then((data) => {
        console.log("<--------start 3rd-------->");
        console.log(data);
        console.log(typeof(data.choice));

        const nextQuestions = promptQuestions.decideWhatIsNextStep(data.choice);
        return nextQuestions;
    }).then(data => {
        console.log("<--------start 4th-------->");
        console.log(data);

        inquirer.prompt(data);
    })
    */


    // userInputCollections.then((data) => {
    // console.log(data);
    // const readMeContent = generateMarkdown(data);
    // const filePathAndName = './sample/README.md';

    // writeToFile(filePathAndName, readMeContent);
    // });
}

// Function call to initialize app
init();