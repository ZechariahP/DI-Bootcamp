import React from 'react';

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
        };
    }

    getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                this.setState({users: data});
            }
        );
    }

    componentDidMount() {
        this.getUsers();
        document.getElementById('search').addEventListener('input', (e) => {
            const search = e.target.value.toLowerCase();
            const filteredUsers = this.state.users.filter(user => user.name.toLowerCase().includes(search));
            this.setState({users: filteredUsers});
        });

        document.getElementById('search').addEventListener('keyup', (e) => {
            if (e.key === 'Backspace') { // Check if backspace key is pressed
                this.getUsers();
            }
        });
    }

    componentDidUpdate() {
        console.log('Component updated');
    }

    render() {
        return (
            <>
                <div>
                    <button onClick={() => this.getUsers()}>Get Users</button>
                    <input id="search" placeholder='Search by name...'/>
                </div>
                <div>
                    <h2>Users</h2>
                    <ul>
                        {this.state.users.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </div>
            </>
        );
    }
}

export default Users;