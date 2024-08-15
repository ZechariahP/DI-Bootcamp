import React, { useEffect, useState } from 'react';
import './App.css';
import { quotes } from './data/QuotesDatabase';

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const quote = quotes[quoteIndex].quote;
  const author = quotes[quoteIndex].author;

  const handleNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(randomIndex);

    const root = document.documentElement;
    const randomColor = getRandomColor();
    root.style.setProperty('--primary-color', randomColor);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const button = document.querySelector('button');
    button.addEventListener('click', handleNewQuote);

    return () => {
      button.removeEventListener('click', handleNewQuote);
    };
  }, []);

  return (
    <div className="box">
      <h1>"{quote}"</h1>
      <h2>-{author}-</h2>
      <div className="button-container">
        <button>New Quote</button>
      </div>
    </div>
  );
}

export default App;