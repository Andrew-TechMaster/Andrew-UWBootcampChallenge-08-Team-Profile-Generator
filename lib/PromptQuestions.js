const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Generator = require('../src/generateHTML');
const wf = require('../src/writeFlie');
const Validator = require('../src/validate')


class PromptQuestions {

    constructor(manager = [], members = []) {
        this.manager = manager;
        this.members = members;
        this.validator = new Validator();
    }

    getInitialQuestions() {
        const initialQuestions = [
            // Mangager's Name
            {
                type: 'input',
                name: 'userName',
                message: 'What is the team manager\'s name?',
                validate: (value) => this.validator.checkName(value)
            },
            // Mangager's ID
            {
                type: 'input',
                name: 'userId',
                message: 'What is the team manager\'s id?',
                validate: (value) => this.validator.checkIsNumber(value)
            },
            // Mangager's Email
            {
                type: 'input',
                name: 'userEmail',
                message: 'What is the team manager\'s email?',
                validate: (value) => this.validator.checkEmail(value)
            },
            // Mangager's Office-Number
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the team manager\'s office number?',
                validate: (value) => this.validator.checkIsNumber(value)
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
                message: 'What is your engineer\'s name?',
                validate: (value) => this.validator.checkName(value)
            },
            // Engineer's ID
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is your engineer\'s id?',
                validate: (value) => this.validator.checkIsNumber(value)
            },
            // Engineer's Email
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is your engineer\'s email?',
                validate: (value) => this.validator.checkEmail(value)
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
                message: 'What is your intern\'s name?',
                validate: (value) => this.validator.checkName(value)
            },
            // Intern's ID
            {
                type: 'input',
                name: 'internId',
                message: 'What is your intern\'s id?',
                validate: (value) => this.validator.checkIsNumber(value)
            },
            // Intern's Email
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is your intern\'s email?',
                validate: (value) => this.validator.checkEmail(value)
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
                this.promptInternQuestions().then(({ internName, internId, internEmail, internSchool }) => {
                    const internObj = new Intern(internName, internId, internEmail, internSchool)
                    this.members.push(internObj);
                    return this.promptChoiceQuestion()
                })
                    .then((data) => this.decideWhatIsNextStep(data.choice))
                break;
            case "I don't want to add any more team members":
                console.log("------------ Manager Obj: ------------");
                console.log(this.manager);
                console.log(this.manager[0].name);
                console.log("------------ Members Obj: ------------");
                console.log(this.members);

                const generator = new Generator(this.manager, this.members);
                const fileName = "dist/test.html";
                const data = generator.renderHTML();
                wf(fileName, data);
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