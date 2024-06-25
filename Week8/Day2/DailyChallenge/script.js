let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
//Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

//1. Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.


//2. Create another arrow function named cloneGroceries.
    //In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
        //Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
        //There won't be a modification of the user variable because it is a copy of the client variable. The client variable is a string and strings are passed by value. When we assign the value of the client variable to the user variable, we are copying the value of the client variable to the user variable. The user variable is not pointing to the client variable. It is pointing to the value of the client variable. So, when we change the value of the client variable, the user variable will not be affected. The user variable will still be pointing to the value of the client variable before the change.
    //In the function, create a variable named shopping that is equal to the groceries variable.
        //Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
        //There will be a modification of the shopping object because objects are passed by reference. When we assign the value of the groceries object to the shopping variable, we are copying the reference of the groceries object to the shopping variable. The shopping variable is pointing to the groceries object. So, when we change the value of the totalPrice key in the shopping object, the groceries object will also be affected. The shopping variable will still be pointing to the groceries object after the change.
        //Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?
        //There will be a modification of the shopping object because objects are passed by reference. When we assign the value of the groceries object to the shopping variable, we are copying the reference of the groceries object to the shopping variable. The shopping variable is pointing to the groceries object. So, when we change the value of the paid key in the shopping object, the groceries object will also be affected. The shopping variable will still be pointing to the groceries object after the change.
//3. Call the cloneGroceries function

const displayGroceries = (obj) => {
    const fruits = obj.fruits;
    fruits.forEach(fruit => console.log(fruit));
}
const cloneGroceries = () => {
    let user = client;
    user = "Betty";
    const shopping = groceries;
    shopping.totalPrice = "35$";
    shopping.other.paid = false;
    console.log(user, client);
    console.log("shopping: ", shopping);
    console.log("groceries: ", groceries);
}
displayGroceries(groceries);
cloneGroceries();