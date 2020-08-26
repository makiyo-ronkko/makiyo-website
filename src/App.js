import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Project from './Components/Project/Project';
//import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <header>
          <Nav />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
        </Switch>
        <div>
          {/* <Footer /> */}
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
