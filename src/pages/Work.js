import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/Work.scss";

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <p> I am looking for work that is:</p>
        <ul>
          <li>
            <strong>Part-time</strong> or <strong>Full-time</strong>
          </li>
          <li>
            <strong>Remote</strong> (can travel for team meetings when required)
          </li>
        </ul>
        <p>
          Both large companies and start-ups interest me and I can do front-end,
          back-end, and full-stack work for both web and mobile. I love learning
          and would be happy to learn new languages and frameworks on the job.
        </p>
        <p>
          In my previous positions, I have shown that I work well independently
          and with the team. I've also done several projects with React - like
          this website! Please <Link to="/contact"> contact me</Link> if you
          think I would be a good fit for your team.
        </p>
      </div>
    );
  }
}

export default Work;
