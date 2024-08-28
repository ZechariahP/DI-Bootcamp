import React, { Component } from 'react';
import './App.css';
import heroes from './data/heroes.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: heroes.superheroes, clickedHeroes: [], score: 0, topScore: 0
    };
  }

  handleClick = (heroName) => {
    this.setState((state) => {
      const newScore = state.clickedHeroes.includes(heroName) ? 0 : state.score + 1;
      const clickedHeroes = state.clickedHeroes.includes(heroName) ? [] : [...state.clickedHeroes, heroName];
      return {
        heroes: [...this.state.heroes].sort((a, b) => (Math.random() > 0.5 ? -1 : 1)),
        clickedHeroes: clickedHeroes,
        score: newScore,
        topScore: Math.max(newScore, state.topScore)
      };
    });
  };

  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <div>
            <h1>Superheroes React Memory Game</h1>
          </div>
          <div>Score: {this.state.score}</div>
          <div>Top Score: {this.state.topScore}</div>
        </nav>
        <div className="rules">
          Get points by clicking on an image but don't click on the same one twice! 
        </div>
          <div className="hero-container">
            {this.state.heroes.map((hero) => (
              <div key={hero.id} className="hero-card" onClick={() => this.handleClick(hero.name)}>
                <div className="image-container">
                  <img src={hero.image}/>
                </div>
                  <p>
                    <span className="bold">
                      Name: {hero.name}
                    </span>
                  </p>
                  <p>
                    <span className="bold">
                      Occupation: {hero.occupation}
                    </span>
                  </p>
                </div>
            ))}

          </div>
        </div>
    );
  }
}

export default App;