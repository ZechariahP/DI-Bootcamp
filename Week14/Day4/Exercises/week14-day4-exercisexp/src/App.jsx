import React from 'react';

class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    handleClick = () => {
        this.setState(({ counter }) => ({
            counter: counter + 1
        }));
    }

    render() {
        if (this.state.counter === 5) {
            throw new Error('I crashed!');
        }

        return (
            <h1 onClick={this.handleClick}>{this.state.counter}</h1>
        );
    }
}

export default BuggyCounter;











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

Use the getSnapshotBeforeUpdate() method, add a console.log("in getSnapshotBeforeUpdate"). Open the Dev Tools, to see when this message is displayed. */


