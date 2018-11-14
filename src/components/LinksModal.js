import React, { Component } from "react";
import { Link } from "react-router-dom";

class LinksModal extends Component {
  render() {
    return (
      <span className="links-modal">
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
      </span>
    );
  }
}

export default LinksModal;
