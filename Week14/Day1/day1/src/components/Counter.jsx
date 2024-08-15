import React, {Component} from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
    }

    increment = () => {
        this.setState({counter: this.state.counter + 1});
    }

    decrement = () => {
        this.setState({counter: this.state.counter - 1});
    }

    render() {
        return (
            <>
                <button onClick={() => this.increment()}>+</button>
                Counter: {this.state.counter}
                <button onClick={() => this.decrement()}>-</button>
            </>
        );
    }
}

export default Counter;