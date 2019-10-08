import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import IconLink from "./components/IconLink";
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
          src={require("./media/headshot.jpg")}
          alt="headshot"
          className="circle"
        />
        <header>
          <h1>Alexandra Garcia </h1>
          <ul>
            <IconLink
              link="https://www.github.com/alliejant"
              icon="fab fa-github"
            />
            <IconLink
              link="https://www.linkedin.com/in/alliejant/"
              icon="fab fa-linkedin"
            />
            <IconLink
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
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" activeClassName="active">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" activeClassName="active">
              Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" activeClassName="active">
              Resume
            </NavLink>
          </li>
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
