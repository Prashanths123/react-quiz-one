import React, { Component } from 'react';
import '../csstyle/ResultComponent.css';

export default class ResultComponent extends Component {
  render() {
    return (
      <div id="resultComponent">
        <h1 id="ResultComponentHeading">Quiz Result</h1>
        <div id="result-container">
          <h3>You need more Practice! </h3>
          <h1 id="scorestatement">Your Score is 20%</h1>
          <div id="results">
            <div className="resultStatements">
              <p>Total number of questions</p>
              <p>15</p>
            </div>
            <div className="resultStatements">
              <p>Number of attempted questions</p>
              <p>9</p>
            </div>
            <div className="resultStatements">
              <p>Number of correct answers</p>
              <p>3</p>
            </div>
            <div className="resultStatements">
              <p>Number of wrong answers</p>
              <p>6</p>
            </div>
          </div>
        </div>
        <div id="RC-actionsContainer">
          <button className="RC-actions" id="playagain">
            Play Again
          </button>
          <button className="RC-actions" id="backtohome">
            Back to Home
          </button>
        </div>
      </div>
    );
  }
}
