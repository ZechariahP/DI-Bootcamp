const fs = require('fs');

fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    fs.writeFile('destination.txt', data, (err) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log('File was copied');
    }
    );
});

/*
PS C:\Users\Zachary\Desktop\DI-Bootcamp\Week11\Day2\Exercises\ExerciseXP\Exercise7\file-explorer> node copy-file.js
[Error: ENOENT: no such file or directory, open 'C:\Users\Zachary\Desktop\DI-Bootcamp\Week11\Day2\Exercises\ExerciseXP\Exercise7\file-explorer\source.txt'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\Users\\Zachary\\Desktop\\DI-Bootcamp\\Week11\\Day2\\Exercises\\ExerciseXP\\Exercise7\\file-explorer\\source.txt'
}
PS C:\Users\Zachary\Desktop\DI-Bootcamp\Week11\Day2\Exercises\ExerciseXP\Exercise7\file-explorer> node read-directory.js
*/

//instructions do not say to create a source.txt file, therefore that is why the error is thrown.