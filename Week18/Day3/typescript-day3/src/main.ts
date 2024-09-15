/** index signatures / keys */

interface EmployeeInterface {
  name: string;
  age: number;
  role: string;
}

let employee: EmployeeInterface = {
  name: "John",
  age: 30,
  role: "Developer",
};

console.log(employee.name); // John
console.log(employee.age); // 30
console.log(employee.role); // Developer

for (let key in employee) {
  console.log(`${key}: ${employee[key as keyof EmployeeInterface]}`);
}

/** dynamic keys */
const prop1: string = "name";
employee[prop1];

console.log(employee[prop1 as keyof EmployeeInterface]); // John

/** 
 * 1. Create Student interface / type with name, age, and marks
 * 2. Create a student object with the above properties
 * 3. Loop through the student object and print the key and value
 */

interface StudentInterface {
  name: string;
  grade: number | string;
  courses?: string[];
}

const student: StudentInterface = {
  name: "John",
  grade: 10,
  courses: ["Math", "Science"],
};

Object.keys(student).forEach((key) => {
  console.log(`${key}: ${student[key as keyof StudentInterface]}`);
});

interface EmployeeInterface {
  name: string;
  age: number;
  role: string;
}

type keys = "name" | "age" | "role";
type EmployeeType = Record<keys, string | number>;

let employeeAnne: EmployeeType = {
  name: "Anne",
  age: 30,
  role: "10",
};

/** Generics */

// const strEcho = (value: string): string => value;
// const numEcho = (value: number): number => value;

const echo = <T>(value: T): T => value;
console.log(echo("Hello")); // Hello
console.log(echo(10)); // 10
console.log(echo([1, 2, 3])); // [1, 2, 3]

const getFirstElementArray = <T>(arr: T[]): T => arr[0];
console.log(getFirstElementArray([1, 2, 3])); // 1

/** generic with interface */

interface Person<T> {
  id: number;
  name: string;
  age: number;
  info: T;
}

const person1: Person<(number | string)[]> = {
  id: 1,
  name: "John",
  age: 30,
  info: ['TLV', 'BEZALEL', 8]
};

const person2: Person<string[]> = {
  id: 2,
  name: "Anne",
  age: 25,
  info: {
    'TLV',
    'BEZALEL',
    8
  }
};

/** create a function isObj - get a generic type as parameter
 * return { parameter, is: true/false}
 */

const isObj = <T>(value: T): { parameter: T; is: boolean } => {
  return {
    parameter: value,
    is: typeof value === "object",
  };
}

console.log(isObj(10)); // { parameter: 10, is: false }
console.log(isObj({ name: "John" })); // { parameter: { name: 'John' }, is: true }

interface BoolCheck<T> {
  arg: T;
  is: boolean;
}

const isObj = <T>(arg: T): BoolCheck<T> => {
  if(Array.isArray(arg) && !arg.length){
    return {arg, is: false}
  }
  if(typeof arg === 'object' && !Array.isArray(arg) && arg !== null){
    return {arg, is: true}
  } 
  return {arg, is: false}
};

console.log(isObj(10)); // { arg: 10, is: false }
console.log(isObj({ name: "John" })); // { arg: { name: 'John' }, is: true }

/** Utility type */

interface Post {
  id: number;
  title: string;
  content: string;
}

const post1: Post = {
  id: 1,
  title: "Post 1",
  content: "Content 1",
};

// partial

const updatePost = (post: Post, update: Partial<Post>): Post => {
  return { ...post, ...update };
}

console.log(updatePost(post1, { title: "Post 1 Updated" }));

/** Pick or Omit */
type MiniPost = Pick<Post, "id" | "title">;

const miniPost: MiniPost = {
  id: 1,
  title: "Post 1",
};

type MiniPost = Omit<Post, "content">;

const miniPost: MiniPost = {
  id: 1,
  title: "Post 1",
};

type OtherPost = Omit<Post, "id" | "title">;

// Exclude or Extract
type Grades - "A" | "B" | "C" | "D" | "F";
type PassGrades = Exclude<Grades, "F">; // "A" | "B" | "C" | "D"
type FailGrades = Extract<Grades, "F">; // "F"

/** NonNullable */

type NullableString = number | string | null;
type NonNullableString = NonNullable<NullableString>; // number | string

/** ReturnType */

const createUser = (name: string, age: number, active: boolean) => ({ name, age, active });

type UserObject = ReturnType<typeof createUser>;

/** Parameters */
type UsersParams = Parameters<typeof createUser>;

