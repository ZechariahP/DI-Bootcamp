import {greet} from './greeting.js';
import {colorfulMessage} from './colorful-message.js';
import {readFile} from './read-file.js';

//Use the greet function to greet the user, display the colorful message, and read and display the file’s content.

function challenge() {
    console.log(greet('user'));
    colorfulMessage();
    readFile();
}

challenge();