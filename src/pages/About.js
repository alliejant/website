import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="About">
        <p> How many people do you think would choose D? </p>
        <img
          src={require("../images/javascript-joke.jpg")}
          alt="javascript is the most popular language"
        />
        <p>
          I'd be tempted, but okay, enough with the joking{" "}
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
          back-end, web and mobile engineering roles and enjoy doing whatever
          I'm needed for. Coding in general excites me and how much there is to
          learn!
        </p>
        <p>
          Outside of engineering, I like hiking, listening to electronic music,
          and dancing to salsa/cumbia (how I met my husband). Since my last
          position at a startup, we took some time to travel the world before
          settling back in to the lovely San Francisco Bay Area.
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
