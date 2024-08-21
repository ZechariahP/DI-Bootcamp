import React from 'react';
import { UserForm } from './components/UserForm.component';
import { Summary } from './components/Summary.component';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: "",
      destination: "",
      noNuts: false,
      noLactose: false,
      vegan: false
    };
  }

  render() {
    return (
      <>
        <UserForm info={this.state} clearForm={()=>this.setState({firstName:"", lastName:"", age:""})} 
        changeFirstName={(newName) => this.setState({firstName: newName})}
        changeLastName={(newName) => this.setState({lastName: newName})}
        changeAge={(age) => this.setState({age})}
        changeGender={(gender) => this.setState({gender})}
        changeDestination={(destination) => this.setState({destination})}
        changeNoNuts={() => this.setState({noNuts: !this.state.noNuts})}
        changeNoLactose={() => this.setState({noLactose: !this.state.noLactose})}
        changeVegan={() => this.setState({vegan: !this.state.vegan})}
        />
        <Summary info={this.state} />
      </>
    );
  }
}

export default App;