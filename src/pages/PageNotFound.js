import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/PageNotFound.scss";

class PageNotFound extends Component {
  render() {
    return (
      <div className="PageNotFound">
        <img src={require("../media/shrug.png")} alt="shrug" />
        <p> Sorry I can't find the page you're looking for! </p>
        <p>
          Feel free to <Link to="/contact"> contact me</Link>.
        </p>
      </div>
    );
  }
}

export default PageNotFound;
