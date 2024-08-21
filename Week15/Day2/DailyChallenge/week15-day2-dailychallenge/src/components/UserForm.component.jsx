import React from 'react';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: document.getElementById('search').value })
        };
        const url = "http://localhost:3001/api/world";
        try {
                const resJson = await fetch(url, options);
                const response = await resJson.json();
                console.log(response);   
                this.props.setMessage(response.message); 
                document.getElementById('search').value = ''; // Clear the input field
        } catch (error) {
                console.error(error);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input 
                    type='text' 
                    placeholder='Something Here'
                    id="search" />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default UserForm;