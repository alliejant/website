import React, { Component } from "react";

class IconButton extends Component {
  render() {
    const icon = this.props.icon ? <i className={this.props.icon} /> : "";
    const text = this.props.text ? this.props.text : "";
    return (
      <button onClick={this.props.action}>
        {icon} {text}
      </button>
    );
  }
}

export default IconButton;
