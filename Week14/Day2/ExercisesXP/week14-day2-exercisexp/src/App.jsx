import React from 'react';
import { Car } from './components/Car.component';
import { Events } from './components/Events.component';
import { Phone } from './components/Phone.component';
import { Color } from './components/Color.component';

function App() {
  return (
    <>
      <Car />
      <Events />
      <Phone />
      <Color />
    </>
  );
}

export default App;