import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Work.scss";

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <p> I am looking for work that is:</p>
        <ul>
          <li>
            <strong>Part-time</strong> (20-30 hrs/wk)
          </li>
          <li>
            <strong>Remote</strong> (can travel for team meetings when required)
          </li>
        </ul>
        <p>
          Both large companies and start-ups interest me and I and can do
          front-end, back-end, and full-stack work for both web and mobile. I
          love learning and would be happy to learn new languages and frameworks
          on the job.
        </p>
        <p>
          In my previous positions, I have shown that I work well independently
          but can communicate well in a group. I am most well versed in
          Javascript and have done several projects with React and React Native
          - like this website! I am committed to doing what I can in order to
          present my best work. Please <Link to="/contact"> contact me</Link> if
          you think I would be a good fit for your team.
        </p>
      </div>
    );
  }
}

export default Work;
