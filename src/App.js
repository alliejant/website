import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import WebsiteLink from "./components/WebsiteLink";
import LinksModal from "./components/LinksModal";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import PageNotFound from "./pages/PageNotFound";
import "./styles/style.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLinksModal: false
    };
  }

  toggleShowLinksModal = e => {
    this.setState({ showLinksModal: !this.state.showLinksModal });
  };

  render() {
    return (
      <div className="app">
        <img
          src={require("./images/headshot.jpg")}
          alt="headshot"
          className="circle"
        />
        <header>
          <h1>Alexandra Garcia</h1>
          <ul>
            <WebsiteLink
              link="https://www.github.com/alliejant"
              icon="fab fa-github"
            />
            <WebsiteLink
              link="https://www.linkedin.com/in/alliejant/"
              icon="fab fa-linkedin"
            />
            <WebsiteLink
              link="https://www.angel.co/alliejant"
              icon="fab fa-angellist"
            />
          </ul>
        </header>
        <nav>
          <button onClick={this.toggleShowLinksModal}>
            <i className="fas fa-bars" />
          </button>
          {this.state.showLinksModal ? (
            <LinksModal toggleShowLinksModal={this.toggleShowLinksModal} />
          ) : null}
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          ) : null}
        </nav>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Redirect to={"/contact"} />}
            />
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
