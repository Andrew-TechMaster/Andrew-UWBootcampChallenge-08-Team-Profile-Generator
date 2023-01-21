class Validator {
    checkName(input) {
        if (!input || typeof input !== 'string') {
            console.log("\n Please enter the name of the manager.");
            return false;
        } 

        return true;
    }

    checkIsNumber(input) {
        if (!input || isNaN(input)) {
            console.log("\n Please enter a valid ID (an unique number).");
            return false;
        } 

        return true;
    } 

    checkEmail(input) {
        const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
 
        if (!input || !valid) {
            console.log("\n Please enter a valid email.");
            return false;
        } 

        return true;
    }
  
}

module.exports = Validator;