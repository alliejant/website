import React, { Component } from 'react';
import './style.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={require("./images/headshot.jpg")} alt="headshot" className="circle" />
        <header> 
          <h1>Alexandra Antkowiak</h1>
          <span>
            <i className="fab fa-github"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-angellist"></i>
          </span>
        </header>
        <nav>
          <i className="fas fa-bars"></i>
          <span>Contact</span>
          <span>About</span>
          <span>Skills</span>
          <span>Work</span>
          <span>Resume</span>
        </nav>
        <main>
          Blank Text
        </main>
      </div>
    );
  }
}

export default App;
