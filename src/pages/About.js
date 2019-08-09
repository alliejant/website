import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="About">
        <p> You want to hear a JavaScript joke?</p>
        <p>
          I'll{" "}
          <a
            href="https://javascriptissexy.com/understand-javascript-callback-functions-and-use-them"
            target="blank"
          >
            callback
          </a>{" "}
          later.
        </p>
        <p>
          Okay, enough with the joking{" "}
          <img
            src={require("../images/facepalm.png")}
            alt="facepalm"
            title="facepalm"
          />
          {". "}I am a full stack software engineer. I have been programming
          since 2015 when I took a career test and programming came up as one of
          my matched careers. I started learning javascript through{" "}
          <a href="https://www.codecademy.com" target="blank">
            Codecademy
          </a>{" "}
          and gradually moved to more complex topics such as React, GraphQL with
          Relay, and other languages like Go. I’ve worked in front-end,
          back-end, full stack and mobile engineering roles and love all of
          them. Coding in general excites me and how much there is to learn!
        </p>
        <p>
          Outside of engineering, I like hiking, dancing to salsa/cumbia, and
          listening to electronic music. I met my husband while salsa dancing
          and got married to him on the edge of Yosemite and we have a cute
          golden retriever together. I also enjoy traveling and lived in Ecuador
          for almost a year while working at a non-profit.{" "}
        </p>
        <p>
          I’d love to connect with others who are building a mobile application
          or want to talk code together! I am currently looking for a new
          position, so please take a look at what <Link to="/work"> work</Link>{" "}
          I am looking for.
        </p>
      </div>
    );
  }
}

export default About;
