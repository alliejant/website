import React, { Component } from "react";
import { Link } from "react-router-dom";

class LinksModal extends Component {
  render() {
    return (
      <span className="links-modal">
        <li>
          <Link to="/contact" onClick={this.props.toggleShowLinksModal}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={this.props.toggleShowLinksModal}>
            About
          </Link>
        </li>
        <li>
          <Link to="/skills" onClick={this.props.toggleShowLinksModal}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="/work" onClick={this.props.toggleShowLinksModal}>
            Work
          </Link>
        </li>
        <li>
          <Link to="/resume" onClick={this.props.toggleShowLinksModal}>
            Resume
          </Link>
        </li>
      </span>
    );
  }
}

export default LinksModal;
