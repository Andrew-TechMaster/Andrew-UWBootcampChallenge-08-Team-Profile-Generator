    // pq.promptInitialQuestions().then((data) => {
    //     const managerObj = new Manager(data.userName, data.userId, data.userEmail, data.officeNumber);
    //     manager.push(managerObj);
    //     return pq.promptChoiceQuestion()
    // })
    //     .then((data) => pq.decideWhatIsNextStep(data.choice))


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
