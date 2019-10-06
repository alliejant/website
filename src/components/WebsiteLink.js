import React, { Component } from "react";

class WebsiteLink extends Component {
  render() {
    let icon = this.props.icon ? <i className={this.props.icon} /> : "";
    let text = this.props.text ? this.props.text : "";
    return (
      <a href={this.props.link} target="_blank" rel="noopener noreferrer">
        {icon}
        {text}
      </a>
    );
  }
}

export default WebsiteLink;
