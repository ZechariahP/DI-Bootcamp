//Exercise XP
//Exercise 1: Analyzing
//1. Analyze these pieces of code before executing them. What will be the outputs ?
//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

//Prediction: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
//Actual: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
//------2------
const country = "USA";
console.log([...country]);
//Prediction: ['U', 'S', 'A']
//Actual: ['U', 'S', 'A']

//------Bonus------
let newArray = [...[,,]];
console.log(newArray);
//Prediction: [undefined, undefined]
//Actual: [undefined, undefined]

//Exercise 2: Employees
//Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
//1. Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
//const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);

//2. Using the filter() method, create a new array, containing only the Full Stack Residents.
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);//[ { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' }, { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' }, { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' } ]
//3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
const fullStackResidentsLastName = users.filter(user => user.role === 'Full Stack Resident').map(user => user.lastName);
console.log(fullStackResidentsLastName);//[ 'Bouley', 'Alnaji', 'Hajek' ]
//Exercise 3: Star Wars
//Instructions
//Using this array: 
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
//1. Use the reduce() method to combine all of these into a single string.
const combine = epic.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);//'a long time ago in a galaxy far far away'

//Exercise 4: Employees #2
//Using this object:
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}];
//1. Using the filter() method, create a new array, containing the students that passed the course.
const studentsPassed = students.filter(students => students.isPassed === true)
console.log(studentsPassed)//[ { name: 'Ray', course: 'Computer Science', isPassed: true }, { name: 'Jenner', course: 'Information Technology', isPassed: true }, { name: 'Marco', course: 'Robotics', isPassed: true } ]
//2. Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
const welcomeStudentsPassed = students.filter(students => students.isPassed === true).forEach(students => console.log(`Good job ${students.name}, you passed the course in ${students.course}`))
//Good job Ray, you passed the course in Computer Science
//Good job Jenner, you passed the course in Information Technology
//Good job Marco, you passed the course in Robotics





