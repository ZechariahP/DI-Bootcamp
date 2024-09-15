function App () {
  
  //Exercise 1: Intersection Types
  type Person = {
      name: string;
      age: number;
  };

  type Address = {
      street: string;
      city: string;
  };

  type PersonWithAddress = Person & Address;

    const personWithAddress: PersonWithAddress = {
        name: "John Doe",
        age: 30,
        street: "123 Main St",
        city: "New York",
    };

    console.log(personWithAddress);
    //------------------------------------//
    //Exercise 2: Type Guards With Union Types

  function describeValue(value: number | string): string {
    if (typeof value === "number") {
      return "This is a number";
    } else {
      return "This is a string";
    }
  }
    
  console.log(describeValue(42));
  console.log(describeValue("hello"));

    //------------------------------------//
    //Exercise 3: Type Casting

  const someValue: any = 36;
  const strValue: string = someValue.toString();
  
  console.log(typeof strValue);
  console.log(strValue);
  
  console.log(typeof strValue)
  console.log(strValue);
  //------------------------------------//
  //Exercise 4: Type Assertions With Union Types

  function getFirstElement(arr: (number | string)[]): string {
    return arr[0] as string;
  }

  console.log(getFirstElement(["hello", 42]));
  console.log(getFirstElement([42, "hello"]));
  //------------------------------------//
  //Exercise 5: Generic Constraints

  function logLength<T extends { length: number }>(arg: T): void {
    console.log(arg.length);
  }
  
  logLength("hello");
  //------------------------------------//
  //Exercise 6: Intersection Types And Type Guards

  type Person2 = {
    name: string;
    age: number;
  };
  
  type Job = {
    position: string;
    department: string;
  };
  
  type Employee = Person2 & Job;
  
  function describeEmployee(employee: Employee): string {
    if (employee.position === "Manager") {
      return `${employee.name} is a manager in the ${employee.department} department`;
    } else {
      return `${employee.name} is a developer in the ${employee.department} department`;
    }
  }
  
  console.log(describeEmployee({ name: "John Doe", age: 30, position: "Manager", department: "HR" }));
  console.log(describeEmployee({ name: "Jane Doe", age: 25, position: "Developer", department: "IT" }));
  //------------------------------------//
  //Exercise 7: Type Assertions And Generic Constraints

  function formatInput<T extends { toString(): string }>(input: T): string {
    return input.toString();
  }
  
  console.log(formatInput("hello"));
  console.log(typeof formatInput("hello"));
  console.log(formatInput(42));
  console.log(typeof formatInput(42));
  console.log(formatInput([1, 2, 3]));
  console.log(typeof formatInput([1, 2, 3])); 
  console.log(formatInput({ name: "John Doe" }));
  console.log(typeof formatInput({ name: "John Doe" }));


    return (
        <div>
            <p>"Open the console to see the output."</p>
        </div>
    );  
}

export default App;


