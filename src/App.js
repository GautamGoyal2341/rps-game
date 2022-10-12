import React from "react";
import Rock from "./icons/Rock";
import Paper from "./icons/Paper";
import Scissors from "./icons/Scissors";
import "./App.css";

const choices = [
  { id: 1, name: "rock", components: Rock },
  { id: 2, name: "paper", components: Paper },
  { id: 3, name: "scissor", components: Scissors },
];

function App() {
    const [userChoice , setUserChoice] = React.useState(null);
    const [computerChoice , setComputerChoice] = React.useState(null);
  function handelUserChoice(choice) {
    const chosenChoice = choices.find((c) => c.id === choice);
      setUserChoice(chosenChoice);
  }

  return (
    <div className="app">
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>

        <div className="wins-losses">
          <div className="wins">
            <span className="number">0</span>
            <span className="text">Wins</span>
          </div>

          <div className="losses">
            <span className="number">0</span>
            <span className="text">Losses</span>
          </div>
        </div>
      </div>

      <div className="choices">
        <div>You</div>
        <div />
        <div>Computer</div>

        <div>
          <button className="rock" onClick={() => handelUserChoice(1)}>
            <Rock />
          </button>
          <button className="paper" onClick={ () => handelUserChoice(2)}>
            <Paper />
          </button>
          <button className="scissors" onClick={ () => handelUserChoice(3)}>
            <Scissors />
          </button>
        </div>

        <div className="vs">vs</div>

        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
    </div>
  );
}

export default App;
