const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class PromptQuestions {

    constructor(manager = [], members = []) {
        this.manager = manager;
        this.members = members;
    }

    getInitialQuestions() {
        const initialQuestions = [
            // Mangager's Name
            {
                type: 'input',
                name: 'userName',
                message: 'What is the team manager\'s name?'
            },
            // Mangager's ID
            {
                type: 'input',
                name: 'userId',
                message: 'What is the team manager\'s id'
            },
            // Mangager's Email
            {
                type: 'input',
                name: 'userEmail',
                message: 'What is the team manager\'s email?'
            },
            // Mangager's Office-Number
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the team manager\'s office number?'
            }
        ];

        return initialQuestions;
    }

    getChoiceQuestion() {
        const incomingQuestion = [
            // Choice For The Next Step
            {
                type: 'list',
                name: 'choice',
                message: 'Which type of team member would you like to add?',
                choices: ["Engineer", "Intern", "I don't want to add any more team members"]
            }
        ];

        return incomingQuestion;
    }

    getEngineerQuestions() {
        const engineerQuestions = [
            // Engineer's Name
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is your engineer\'s name?'
            },
            // Engineer's ID
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is your engineer\'s id'
            },
            // Engineer's Email
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is your engineer\'s email?'
            },
            // Engineer's GitHub
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is your engineer\'s GitHub?'
            }
        ];

        return engineerQuestions;
    }

    getInternQuestion() {
        const internQuestions = [
            // Intern's Name
            {
                type: 'input',
                name: 'internName',
                message: 'What is your intern\'s name?'
            },
            // Intern's ID
            {
                type: 'input',
                name: 'internId',
                message: 'What is your intern\'s id'
            },
            // Intern's Email
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is your intern\'s email?'
            },
            // Intern's School
            {
                type: 'input',
                name: 'internSchool',
                message: 'What is your intern\'s school?'
            }
        ];

        return internQuestions;
    }

    promptInitialQuestions() {
        const initialQuestion = this.getInitialQuestions();
        return inquirer.prompt(initialQuestion);
    }

    promptChoiceQuestion() {
        const questions = this.getChoiceQuestion();
        return inquirer.prompt(questions);
    }

    promptEngineerQuestions() {
        const questions = this.getEngineerQuestions();
        return inquirer.prompt(questions);
    }

    promptInternQuestions() {
        const questions = this.getInternQuestion();
        return inquirer.prompt(questions);
    }

    decideWhatIsNextStep(aString) {
        switch (aString) {
            case "Engineer":
                this.promptEngineerQuestions().then((data) => {
                    const engineerObj = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub)
                    this.members.push(engineerObj);
                    return this.promptChoiceQuestion()
                })
                    .then((data) => this.decideWhatIsNextStep(data.choice))
                break;
            case "Intern":
                this.promptInternQuestions().then((data) => {
                    const internObj = new Intern(data.internName, data.internId, data.internEmail, data.internSchool)
                    this.members.push(internObj);
                    return this.promptChoiceQuestion()
                })
                    .then((data) => this.decideWhatIsNextStep(data.choice))
                break;
            case "I don't want to add any more team members":
                console.log(this.manager);
                console.log(this.members);
                break;
        }
    }

    start() {
        this.promptInitialQuestions().then((data) => {
            const managerObj = new Manager(data.userName, data.userId, data.userEmail, data.officeNumber);
            this.manager.push(managerObj);
            return this.promptChoiceQuestion();
        }).then((data) => this.decideWhatIsNextStep(data.choice))
    }
}

module.exports = PromptQuestions;