/**
 * 🌟 Exercise 2: Creating A React Component With TypeScript
What You Will Learn:

How to create a functional React component using TypeScript.
How to define an interface for props and use it in a component.
How to render JSX with a prop value in a React component.
Instructions
Create a simple React component called Greeting that accepts a name prop (a string) and displays a greeting message using that prop.

 */

import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;