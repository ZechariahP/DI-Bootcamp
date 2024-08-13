import React, {Component} from 'react';

export class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {favoriteColor : "red"};
    }
    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps()");
    }
    changeColor = () => {
        this.setState({favoriteColor : "blue"});
    }
    render() {
        return (
            <>
                <h1>My favorite color is {this.state.favoriteColor} </h1>
                <button onClick={this.changeColor}>Change color to blue</button>
            </>
        );
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoriteColor : "yellow"});
        }, 5000);
    }
}