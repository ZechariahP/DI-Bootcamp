import React from 'react';

export class Summary extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div id="summary">
                    <h1>Entered information:</h1>
                    <p>Your name: {this.props.info.firstName} {this.props.info.lastName}</p>
                    <p>Your age: {this.props.info.age}</p>
                    <p>Your gender: {this.props.info.gender}</p>
                    <p>Your destination: {this.props.info.destination}</p>
                    <p>Your dietary restrictions:</p>
                    <br />
                    <span>**Nuts free :  {this.props.info.noNuts ? "YES" : "NO"}</span> 
                    <br />
                    <span>**Lactose free :  {this.props.info.noLactose ? "YES" : "NO"}</span> 
                    <br />
                    <span>**Vegan meal :  {this.props.info.vegan ? "YES" : "NO"}</span> 
                </div>
            </>

        )
    }
}