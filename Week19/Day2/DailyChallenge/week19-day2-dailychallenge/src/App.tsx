import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import DataFetcher from './components/DataFetcher';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <DataFetcher />
      </div>
    </Provider>
  );
};

export default App;