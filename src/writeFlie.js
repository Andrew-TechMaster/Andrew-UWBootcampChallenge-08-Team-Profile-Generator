const fs = require("fs");

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(`Error Happened! ${err}`) : console.log('Successfully created a webpage with the members!'));
}

module.exports = writeToFile;