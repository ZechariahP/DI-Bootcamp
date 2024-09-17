import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import Section from './components/Section';
import List from './components/List';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Heading title='React + TS' subTitle='typescript is a powerful tool' />
      <Section content='TS'>
        <h2>Hello TS</h2>
      </Section>
      <List items={["a","b","c"]}/>
      <Counter count={count} setCount={setCount}/>

    </>
  )
}

export default App;