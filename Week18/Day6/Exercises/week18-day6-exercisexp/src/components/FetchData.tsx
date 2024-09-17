/**
 * 🌟 Exercise 5: Using UseEffect Hook With TypeScript In React
What You Will Learn:

How to use the useEffect hook in a functional React component.
How to fetch data from an API using useEffect.
How to handle loading state and display data in the component.
Instructions
Create a functional React component that uses the useEffect hook to fetch data from an API when the component mounts. Display the fetched data in the component.
 */

import React, { useEffect, useState } from 'react';

interface Data {
  id: number;
  title: string;
  body: string;
}

const FetchData: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Fetch Data</h1>
      {loading && <p>Loading...</p>}
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default FetchData;