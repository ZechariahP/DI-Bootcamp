import React from 'react';

const clickMe = () => {
    alert('I was clicked');
}

const handleKeyPress = (e) => {
    if (e.key != 'Enter') return;
    const message = ('The enter key was pressed, your input is: ' + e.target.value);
    alert (message);
};

export class Events extends React.Component{
    toggleButton = () => {
        this.setState({isToggledOn: !this.state.isToggledOn});
        console.log(this.state);
    };
    constructor(props){
        super(props);
        this.state = {isToggledOn: true};
    }
    render(){
        const buttonMessage = this.state.isToggledOn ? 'ON' : 'OFF';
        return(
            <>
            <p>Hello from Events components</p>
            <button onClick={clickMe}>Click Me!</button>
            <input id="myinput" type="text" onKeyDown={handleKeyPress} />
            <button onClick={this.toggleButton}>{buttonMessage}</button>
            </>
        );
    }
}