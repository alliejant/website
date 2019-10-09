import React, { Component } from "react";
import { Icon } from "@iconify/react";
import icons from "../components/Icons";
import "../styles/pages/Skills.scss";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.mostRecent = [
      "HTML5",
      "CSS3",
      "Sass",
      "Javascript",
      "React",
      "React Native",
      "Ruby",
      "Rails",
      "PostgreSQL"
    ];
    this.somewhatRecent = [
      "GraphQL",
      "Relay",
      "Flow",
      "Redux",
      "Go",
      "NodeJS",
      "Express"
    ];
    this.leastRecent = ["Python", "Flask", "MongoDB"];

    this.state = {
      // options include: Text - No Game, Most Recent, Somewhat Recent, Least Recent
      gameOption: "Most Recent",
      skills: [],
      indiciesToUncover: new Set(),
      firstIndex: null,
      secondIndex: null,
      moves: null,
      winner: true
    };
  }

  componentDidMount() {
    this.createSkills("All");
  }

  createSkills = option => {
    let skills;
    const { mostRecent, somewhatRecent, leastRecent } = this;
    switch (option) {
      case "All":
        skills = mostRecent.concat(somewhatRecent, leastRecent);
        break;
      case "Most Recent":
        skills = Array.from(mostRecent);
        break;
      case "Somewhat Recent":
        skills = Array.from(somewhatRecent);
        break;
      case "Least Recent":
        skills = Array.from(leastRecent);
        break;
      default:
    }

    // Check to make sure skills is of valid length and if so, even out grid to a X by X size
    if (skills === undefined || skills.length < 2) {
      this.setState({
        gameOption: "Text - No Game",
        skills: [],
        winner: false,
        moves: null
      });
      return;
    }

    skills = skills.concat(Array.from(skills));
    let gridSize = 2;
    while (gridSize * gridSize < skills.length) {
      gridSize++;
    }

    const fillStart = skills.length;
    skills.length = gridSize * gridSize;
    skills = skills.fill("freebie", fillStart);

    // Randomize skills
    for (let i = 0; i < skills.length; i++) {
      let randomIndex = i + Math.floor(Math.random() * skills.length - i);
      [skills[i], skills[randomIndex]] = [skills[randomIndex], skills[i]];
    }

    // Set indiciesToUncover and remove all "freebie" indicies from the set
    const indiciesToUncover = new Set(skills.keys());
    skills.forEach((skill, i) => {
      if (skill === "freebie") {
        indiciesToUncover.delete(i);
      }
    });

    this.setState({
      gameOption: option,
      skills,
      indiciesToUncover,
      firstIndex: null,
      secondIndex: null,
      moves: 0,
      winner: false
    });
  };

  formatCards = () => {
    const { skills, indiciesToUncover } = this.state;
    if (skills.length === 0) {
      return;
    }
    const gridSize = Math.sqrt(skills.length);
    const formattedSkills = [];

    // format skills in rows of gridSize
    for (let rowStart = 0; rowStart < skills.length; rowStart += gridSize) {
      const row = [];
      for (let i = rowStart; i < rowStart + gridSize; i++) {
        const lowerCaseSkill = skills[i].replace(/\s/g, "").toLowerCase();
        row.push(
          indiciesToUncover.has(i) ? (
            <div
              key={i}
              className={"covered"}
              onClick={() => this.selectCard(i)}
            />
          ) : (
            <div key={i}>
              {skills[i]}
              <Icon
                icon={icons[lowerCaseSkill]}
                style={{
                  fontSize: "2.5em",
                  display: "block",
                  margin: ".2em auto",
                  maxWidth: "2em"
                }}
              />
            </div>
          )
        );
      }
      formattedSkills.push(<section key={rowStart}>{row}</section>);
    }
    return formattedSkills;
  };

  selectCard = i => {
    let { moves, firstIndex, secondIndex, indiciesToUncover } = this.state;
    if (firstIndex !== null && secondIndex !== null) {
      return;
    }
    moves++;
    indiciesToUncover.delete(i);
    if (firstIndex === null) {
      this.setState({ indiciesToUncover, firstIndex: i, moves });
    } else if (secondIndex === null) {
      this.setState({ indiciesToUncover, secondIndex: i, moves });
      setTimeout(this.checkCards, 700);
    }
  };

  checkCards = () => {
    let { skills, indiciesToUncover, firstIndex, secondIndex } = this.state;
    if (skills[firstIndex] === skills[secondIndex]) {
      //check if won
      if (indiciesToUncover.size === 0) {
        this.setState({
          firstIndex: null,
          secondIndex: null,
          winner: true
        });
      } else {
        this.setState({
          firstIndex: null,
          secondIndex: null
        });
      }
    } else {
      indiciesToUncover.add(firstIndex);
      indiciesToUncover.add(secondIndex);
      this.setState({
        indiciesToUncover,
        firstIndex: null,
        secondIndex: null
      });
    }
  };

  createButton = option => {
    const selected = this.state.gameOption === option;
    return (
      <button
        onClick={() => this.createSkills(option)}
        className={
          selected
            ? "selected"
            : option === "Text - No Game"
            ? "text-no-game"
            : null
        }
      >
        {option}
      </button>
    );
  };

  render() {
    const skills = this.formatCards();
    return (
      <div className="Skills">
        <section>
          {this.createButton("Text - No Game")}
          {this.createButton("All")}
          {this.createButton("Most Recent")}
          {this.createButton("Somewhat Recent")}
          {this.createButton("Least Recent")}
        </section>
        {this.state.gameOption === "Text - No Game" ? (
          <div>
            <section>
              <h6> Most recent: </h6>
              <p>{this.mostRecent.join(", ")}</p>
            </section>
            <section>
              <h6> Somewhat recent: </h6>
              <p> {this.somewhatRecent.join(", ")}</p>
            </section>
            <section>
              <h6> Least recent: </h6>
              <p> {this.leastRecent.join(", ")} </p>
            </section>
          </div>
        ) : null}
        {this.state.winner ? (
          <p className="winner">{this.state.moves} moves! Congrats!!!</p>
        ) : null}
        {this.state.winner === false && this.state.moves !== null ? (
          <p> Moves: {this.state.moves}</p>
        ) : null}
        <section className="game">{skills}</section>
      </div>
    );
  }
}

export default Skills;
