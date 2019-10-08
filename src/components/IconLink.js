import React, { Component } from "react";

class IconLink extends Component {
  render() {
    return (
      <a href={this.props.link} target="_blank" rel="noopener noreferrer">
        <i className={this.props.icon} />
      </a>
    );
  }
}

export default IconLink;
