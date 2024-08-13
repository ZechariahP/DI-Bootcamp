import React from 'react';
import { Language } from './components/Language.component';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        { name: 'Php', votes: 0 },
        { name: 'Python', votes: 0 },
        { name: 'JavaScript', votes: 0 },
        { name: 'Java', votes: 0 },
      ],
    };
  }
  incrementCount = (languageName) => {
    const languageToUpdate = this.state.languages.find(lang => lang.name === languageName);
    const newCount = {
      name: languageToUpdate.name,
      votes: languageToUpdate.votes++
    };
    this.setState(newCount);
  }
  render() {
    return (
      <>
        <h1>Vote for your favorite language!</h1>
        <div className="languages">
          {this.state.languages.map((lang, i) => (
            <Language 
            name={lang.name} 
            votes={lang.votes} 
            key={i}
            incrementCount={() => this.incrementCount(lang.name)}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;