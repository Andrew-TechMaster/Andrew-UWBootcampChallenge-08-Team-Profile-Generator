const fs = require("fs");

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(`Error Happened! ${err}`) : console.log('Successfully created a professional README file!'));
}

module.exports = writeToFile;