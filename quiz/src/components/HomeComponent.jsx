import React, { Component } from "react";
import "../csstyle/HomeComponent.css";

export default class HomeComponent extends Component {
  render() {
    return (
      <div id="homeComponent">
        <h1 id="QuizAPPheading">Quiz Application</h1>
        <button id="playbutton">Start Quiz</button>
      </div>
    );
  }
}
