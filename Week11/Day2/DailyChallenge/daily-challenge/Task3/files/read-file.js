const fs = require('fs');

function readFile() {
    fs.readFile('./file-data.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    }
    );
}

module.exports = {readFile};