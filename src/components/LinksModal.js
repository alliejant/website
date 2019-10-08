import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class LinksModal extends Component {
  render() {
    return (
      <span className="links-modal">
        <li>
          <NavLink to="/contact" onClick={this.props.toggleShowLinksModal}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={this.props.toggleShowLinksModal}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" onClick={this.props.toggleShowLinksModal}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" onClick={this.props.toggleShowLinksModal}>
            Work
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" onClick={this.props.toggleShowLinksModal}>
            Resume
          </NavLink>
        </li>
      </span>
    );
  }
}

export default LinksModal;
