const inquirer = require('inquirer');

class PromptQuestions {

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
                this.promptEngineerQuestions().then(() => this.promptChoiceQuestion())
                    .then((data) => this.decideWhatIsNextStep(data.choice))
                break;
            case "Intern":
                this.promptInternQuestions().then(() => this.promptChoiceQuestion())
                    .then((data) => this.decideWhatIsNextStep(data.choice))
                break;
            case "I don't want to add any more team members":
                break;
        }
    }
}

module.exports = PromptQuestions;