/**
 * 👩‍🏫 👩🏿‍🏫 What You’ll Learn
Advanced use of type guards with union types.
Handling nested structures and complex types.
Implementing conditional logic based on type guards.
Description:
Create a function handleData that processes an array of mixed types. The array can contain objects with different structures. Implement type guards to handle each type of object and perform specific operations based on their structure.

Instructions:
1. Define the following types:

type User = {
 type: 'user';
 name: string;
 age: number;
};

type Product = {
 type: 'product';
 id: number;
 price: number;
};

type Order = {
 type: 'order';
 orderId: string;
 amount: number;
};


2. Create a function handleData that accepts an array of User | Product | Order. Implement type guards to:

For User objects, return a greeting message with the user’s name and age.
For Product objects, return a message with the product ID and its price.
For Order objects, return a summary of the order with its ID and amount.


3. Ensure your function handles unexpected cases gracefully.
 */



function App () {

  type User = {
    type: 'user';
    name: string;
    age: number;
  };
  
  type Product = {
    type: 'product';
    id: number;
    price: number;
  };
  
  type Order = {
    type: 'order';
    orderId: string;
    amount: number;
  };
  
  function handleData(data: (User | Product | Order)[]) {
    data.forEach((item) => {
      if (item.type === 'user') {
        console.log(`Hello ${item.name}, you are ${item.age} years old.`);
      } else if (item.type === 'product') {
        console.log(`Product ID: ${item.id}, Price: $${item.price}`);
      } else if (item.type === 'order') {
        console.log(`Order ID: ${item.orderId}, Amount: $${item.amount}`);
      } else {
        console.log('Unexpected data type');
      }
    });
  }
  
  const data = [
    { type: 'user', name: 'John', age: 30 },
    { type: 'product', id: 1, price: 100 },
    { type: 'order', orderId: '123', amount: 50 },
    { type: 'data', value: 'test' },
  ];
  
  console.log(handleData(data));

  return (
    <div className="App">
      <h1>Type Guards with Union Types</h1>
    </div>
  );
}

export default App;


