/**
 * 🌟 Exercise 4: Creating A React Component With Optional Props
What You Will Learn:

How to define an interface with optional props in TypeScript.
How to handle optional props in a React component.
How to provide default content when optional props are not available.
Instructions
Create a React component called UserCard that accepts optional props name and age and displays them in a card. If the props are not provided, the component should display a default message.
 */

import React from 'react';

interface UserCardProps {
  name?: string;
  age?: number;
}

const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
  return (
    <div>
      <h1>User Card</h1>
      {name && <p>Name: {name}</p>}
      {age && <p>Age: {age}</p>}
      {!name && !age && <p>No user details available.</p>}
    </div>
  );
};

export default UserCard;
