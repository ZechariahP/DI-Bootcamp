import React from 'react';
import UserForm from './components/UserForm.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: null};
  }
  async componentDidMount() {
    const url = "http://localhost:3001/api/hello";
    try {
      const resText = await fetch(url);
      const response = await resText.text();
      this.setState({message: response});
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
    <>
      <UserForm setMessage={(message) => this.setState({message})}/>
      <div>Message: {this.state.message}</div>
    </>
    );

  }
}

export default App;