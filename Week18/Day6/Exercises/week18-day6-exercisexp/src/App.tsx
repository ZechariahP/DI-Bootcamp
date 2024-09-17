/**
 * 🌟 Exercise 1: Creating A New React Project With TypeScript Using Vite
What You Will Learn:

How to set up a new React project with TypeScript using Vite.
How to use the create-vite tool to initialize a project.
How to install necessary dependencies and start the development server.
Instructions
Set up a new React project with TypeScript using Vite. Demonstrate how to use Vite to create the project and include the necessary TypeScript dependencies.





🌟 Exercise 2: Creating A React Component With TypeScript
What You Will Learn:

How to create a functional React component using TypeScript.
How to define an interface for props and use it in a component.
How to render JSX with a prop value in a React component.
Instructions
Create a simple React component called Greeting that accepts a name prop (a string) and displays a greeting message using that prop.



🌟 Exercise 3: Using UseState Hook With TypeScript In React
What You Will Learn:

How to use the useState hook in a React component.
How to manage state in a functional React component using TypeScript.
How to create and handle functions for updating state.
Instructions
Create a functional React component that uses the useState hook to manage a counter. The component should display the current count and have buttons to increment and decrement the count.



🌟 Exercise 4: Creating A React Component With Optional Props
What You Will Learn:

How to define an interface with optional props in TypeScript.
How to handle optional props in a React component.
How to provide default content when optional props are not available.
Instructions
Create a React component called UserCard that accepts optional props name and age and displays them in a card. If the props are not provided, the component should display a default message.



🌟 Exercise 5: Using UseEffect Hook With TypeScript In React
What You Will Learn:

How to use the useEffect hook in a functional React component.
How to fetch data from an API using useEffect.
How to handle loading state and display data in the component.
Instructions
Create a functional React component that uses the useEffect hook to fetch data from an API when the component mounts. Display the fetched data in the component.


 */

import Greeting from './components/Greeting';
import Counter from './components/Counter';
import UserCard from './components/UserCard';
import FetchData from './components/FetchData';
import './App.css';

function App () {
  return (
    <div>
      <h1>React TypeScript Exercises</h1>
      <Greeting name="John" />
      <Counter />
      <UserCard name="John Doe" age={30} />
      <FetchData />
    </div>
  );
}

export default App;
