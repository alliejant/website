import React, { Component } from "react";
import IconButton from "../components/IconButton";
import axios from "axios";
import "../styles/pages/Contact.scss";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactInfo: "",
      message: "",
      feedback: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleButtonClick(type) {
    let message = "";
    switch (type) {
      case "job":
        message = `Hi Allie,\n\nI have an opportunity I think you'd be interested in! We are working on _____.\n\nBest,\n`;
        break;
      case "study":
        message = `Hi Allie,\n\nI'm studying _____ and would love to meet up to study/build apps together. What I'm thinking is we can _____. Let me know if you are interested!\n\nBest,\n`;
        break;
      default:
    }
    this.setState({ feedback: "", message });
  }

  handleChange(event) {
    let newState = {};
    newState[event.target.name] = event.target.value;

    this.setState({ feedback: "", ...newState });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.contactInfo.length < 7 || this.state.message.length < 7) {
      this.setState({
        feedback: "Please fill in your contact info and a message"
      });
      return;
    }
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://www.enformed.io/29rudjf3/", this.state)
      .then(response => {
        console.log("submitted");
        this.setState({
          contactInfo: "",
          message: "",
          feedback: "Thank you! I'll get back to you as soon as possible"
        });
      })
      .catch(error => {
        this.setState({
          feedback:
            "We were unable to submit your message. Try again or contact me on LinkedIn or Angelist!"
        });
      });
  }

  render() {
    const feedback = this.state.feedback ? this.state.feedback : "";
    console.log(feedback);
    return (
      <div className="Contact">
        <ul>
          <IconButton
            icon="fas fa-user-tie icon-2x"
            text="New opportunity"
            action={() => this.handleButtonClick("job")}
          />
          <IconButton
            icon="fas fa-user-friends"
            text="Study buddy"
            action={() => this.handleButtonClick("study")}
          />
          <IconButton
            icon="fas fa-user-astronaut"
            text="Reset the form"
            action={() => this.handleButtonClick("reset")}
          />
        </ul>
        <form onSubmit={this.handleSubmit} className="Contact">
          <p className="feedback">{feedback}</p>
          <label>Contact:</label>
          <input
            type="text"
            name="contactInfo"
            placeholder="How should I reach you?"
            value={this.state.contactInfo}
            onChange={this.handleChange}
          />
          <label>Message:</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <input type="hidden" name="*honeypot" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
