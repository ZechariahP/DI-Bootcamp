import React, { useState } from 'react';

// Define the Todo type
export type Todo = {
  id: number;
  text: string;
};

// Define the ListProps type
type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

// Create a generic List component
function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default List;