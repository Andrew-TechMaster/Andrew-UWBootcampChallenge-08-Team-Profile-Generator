// not used 
// can be looked as a blueprint of the class
class PromptQuestionsInterface {

    getInitialQuestions() {
        // return anArray 
    }

    getChoiceQuestion() {
        // return anArray
    }

    getEngineerQuestions() {
        // return anArray
    }

    getInternQuestion() {
        // return anArray
    }

    promptInitialQuestions() {
        // return inquirer.prompt()
    }

    promptChoiceQuestion() {
        // return inquirer.prompt()
    }

    promptEngineerQuestions() {
        // return inquirer.prompt()
    }

    promptInternQuestions() {
        // return inquirer.prompt()
    }

    decideWhatIsNextStep(aString) {}

    start() {}
}

module.exports = PromptQuestionsInterface;