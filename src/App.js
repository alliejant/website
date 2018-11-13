import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Resume from './pages/Resume';
import PageNotFound from './pages/PageNotFound';
import './style.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={require("./images/headshot.jpg")} alt="headshot" className="circle" />
        <header> 
          <h1>Alexandra Antkowiak</h1>
          <ul>
            <i className="fab fa-github"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-angellist"></i>
          </ul>
        </header>
        <nav>
          <i className="fas fa-bars"></i>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={() => <Redirect to={'/contact'}/>} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/work" component={Work} />
            <Route path="/resume" component={Resume} />
            <Route path="/" component={PageNotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
