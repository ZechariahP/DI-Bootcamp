import logo from './logo.svg';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello to my Blog</h2>
        
        <Post title="olympics Games" sub ="Gold Medals" body="The Olympics Games are a major international event featuring summer and winter sports, in which thousands of athletes participate in a variety of competitions. The Olympic Games are considered the world's foremost sports competition with more than 200 nations participating. The Olympic Games are normally held every four years, alternating between the Summer and Winter Olympics every two years in the four-year period."/>
        <Post>a={1}</Post>
        </header>
        </div>
  );
}

export default App;
