import React from 'react';

export class UserForm extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const entries = Object.entries(this.props.info)
        const params = entries.join("&").replace(/,/g, "=");
        const url = "http://localhost:5173/" + params; // Replace with the correct URL
        fetch(url);
    }

    render() {
        return (
            <>
                <form method="post" action="/" id="form">
                    <input 
                    type="text"
                    name="firstname" 
                    placeholder="First Name" 
                    value={this.props.info.firstName} 
                    onChange={(e) => this.props.changeFirstName(e.target.value)}
                    />
                    <input 
                    type="text" 
                    name="lastname" 
                    placeholder="Last Name" 
                    value={this.props.info.lastName} 
                    onChange={(e) => this.props.changeLastName(e.target.value)}
                    />
                    <input 
                    type="text" 
                    name="age" 
                    placeholder="Age" 
                    value={this.props.info.age} 
                    onChange={(e) => this.props.changeAge(e.target.value)}
                    />
                    <label htmlFor='gender1'>Male</label>
                    <input 
                    type="radio" 
                    name="gender" 
                    value="male" 
                    id="gender1" 
                    checked={this.props.info.gender === "male"}
                    onChange={(e) => this.props.changeGender(e.target.value)}
                    />
                    <label htmlFor="gender2">Female</label>
                    <input 
                    type="radio" 
                    name="gender" 
                    value="female" 
                    id="gender2"
                    checked={this.props.info.gender === "female"} 
                    onChange={(e) => this.props.changeGender(e.target.value)}
                    />

                    <label htmlFor="destination">Destination:</label>
                    <select name="destination" id="destination" onChange={(e) => this.props.changeDestination(e.target.value)}>
                        <option value="Thailand">Thailand</option>
                        <option value="Japan">Japan</option>
                        <option value="Brazil">Brazil</option>
                    </select>
                    <p> Dietary restrictions:</p>
                    <input 
                    checked={this.props.info.noNuts === true} 
                    type="checkbox" 
                    name="nonuts" 
                    id="diet1"
                    onChange={(e) => this.props.changeNoNuts()} 
                    />
                    <label htmlFor="diet1">Nuts free</label>
                    <input 
                    checked={this.props.info.noLactose === true} 
                    type="checkbox" 
                    name="nolactose" 
                    id="diet2"
                    onChange={(e) => this.props.changeNoLactose()} 
                    />          
                    <label htmlFor="diet2">Lactose free</label>
                    <input 
                    checked={this.props.info.vegan === true} 
                    type="checkbox" 
                    name="vegan" 
                    id="diet3"
                    onChange={(e) => this.props.changeVegan()} 
                    />
                    <label htmlFor="diet3">Vegan</label>
                    <input 
                    type="submit" 
                    value="Submit"
                    onClick={this.handleSubmit}  
                    />
                </form>
                <button onClick={this.props.clearForm}>Clear</button>
            </>
        );
    }
}
