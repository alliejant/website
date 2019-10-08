import React, { Component } from "react";
import "../styles/pages/Resume.scss";

class Resume extends Component {
  render() {
    return (
      <iframe
        src={require("../media/Alexandra-Garcia-Resume.pdf")}
        title="resume"
      />
    );
  }
}

export default Resume;
