import fs from 'fs';

export function readFile() {
    fs.readFile('./file-data.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    }
    );
}

