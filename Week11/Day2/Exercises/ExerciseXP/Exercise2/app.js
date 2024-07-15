import { persons } from './data.js';

function averageAge(persons) {
    const totalAge = persons.reduce((acc, person) => acc + person.age, 0);
    return totalAge / persons.length;
}

console.log(averageAge(persons));