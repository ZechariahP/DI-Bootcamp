/* Exercise 4 : UseEffect Hook
Instructions
Create a new Functional Component named Color, with a state variable favoriteColor which value is “red”.

Output the value in a header tag.

Expected output (without the grey border):

red


Note : The useEffect() hook is called after the component is rendered.
In the useEffect(), alert “useEffect reached”

Expected output (without the grey border):

yellow


Note: The return is called when a component gets updated. It re-renders the DOM, with the new changes.
Create a button that when clicked on, calls a function that changes the value of the favoriteColor property to “blue”.

Expected output (without the grey border):

blue */

/* Part I : shouldComponentUpdate

Use the shouldComponentUpdate() method and set it to return true.

If you set the return value of the shouldComponentUpdate() method to false, you won’t be able to change the value of the favoriteColor property to “blue”, (even after clicking on the button)

Expected output (without the grey border):

red



Part II: componentDidUpdate

When the component is mounting, it will be rendered with the favorite color “red”.

Expected output (without the grey border):

red


2. When the component has been mounted, a timer changes the state, and the color becomes “yellow”. You will see :

yellow1


3. In the componentDidUpdate method, add a console.log("after update"). Open the Dev Tools, to see when this message is displayed.



Part III : getSnapshotBeforeUpdate

Use the getSnapshotBeforeUpdate() method, add a console.log("in getSnapshotBeforeUpdate"). Open the Dev Tools, to see when this message is displayed.
    */
/* Using the previous exercise (Exercise 2 : Lifecycle)

Add a new property named show to the state object. Set the value of this property to true.

Add a Class component named Child to the same file. This new component will render a ‘Hello World!’ message in a header tag.

This new component uses the componentWillUnmount method to alert an unmounted message.

Render the Child component in your App, only if the value of the show property is set to true.

Create a “Delete” button that when clicked on (ie. onClick) will call a function that updates the value of the show property to false.

Initial output (without the grey border):

initial



Expected output (without the grey border): On Button Click

click



Expected output (without the grey border): Unmounted

unmounted */


import React, { useState, useEffect } from 'react';

class Color extends React.Component {
    constructor() {
        super();
        this.state = {
            favoriteColor: "red",
            show: true
        }
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidUpdate() {
        console.log("after update");
    }

    getSnapshotBeforeUpdate() {
        console.log("in getSnapshotBeforeUpdate");
    }

    changeColor = () => {
        this.setState({ favoriteColor: "blue" });
    }

    deleteChild = () => {
        this.setState({ show: false });
    }

    render() {
        return (
            <div>
                <h1>{this.state.favoriteColor}</h1>
                <button onClick={this.changeColor}>Change Color</button>
                {this.state.show && <Child />}
                <button onClick={this.deleteChild}>Delete</button>
            </div>
        )
    }
}

class Child extends React.Component {
    componentWillUnmount() {
        alert("Unmounted");
    }

    render() {
        return (
            <h1>Hello World!</h1>
        )
    }
}

export default Color;
