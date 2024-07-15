const fs = require('fs');

function readFile(fileName) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}

function writeFile(fileName, content) {
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File written successfully');
    });
}

module.exports = {
    readFile,
    writeFile
};
