import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary.component';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { PostList } from './components/PostList.component';
import { SocialMedia } from './components/SocialMedia.component';
import { SkillComponent } from './components/Skills.component';
import { ExperiencesComponent } from './components/Experiences.component';

const routes = (
  <Routes>
    <Route path="/" element={<PostList />} />
    <Route path="/social" element={<SocialMedia />} />
    <Route path="/skills" element={<SkillComponent />} />
    <Route path="/experiences" element={<ExperiencesComponent />} />
    <Route path="/profile" element={<ProfileScreen />} />
    <Route path="/shop" element={<ShopScreen />} />
  </Routes>
);


class App extends React.Component {
  handleClick = async () => {
    const url = "https://webhook.site/e791bca3-3d6c-423e-9664-0ab31795584a";
    try {
      
      const body = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    }
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify(body)
      };
      const res = await fetch(url, options);
      const resJson = await res.text;
      console.log(resJson);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar />
        <button onClick={ this.handleClick }>Post Data</button>
          <ErrorBoundary>
            {routes}
        </ErrorBoundary>
      </BrowserRouter>
    </ErrorBoundary>
      
    );
  }
}

function Navbar() {
  return (
    <>
      <h1>Welcome to React Router!</h1>
      <p>
        <NavLink to="/">Posts</NavLink>
      </p>
      <p>
        <NavLink to="/social">SocialMedia</NavLink>
      </p>
      <p>
        <NavLink to="/skills">Skills</NavLink>
      </p>
      <p>
        <NavLink to="/experiences">Experiences</NavLink>
      </p>
      <p>
        <NavLink to="/profile">Profile</NavLink>
      </p>
      <p>
        <NavLink to="/shop">Shop</NavLink>
      </p>
    </> 
  );
}

function ProfileScreen() {
  return <h2>Profile</h2>;
}

function ShopScreen() {
  throw new Error('Oops, something went wrong!');
  return <h2>Shop</h2>;
}

export default App;
