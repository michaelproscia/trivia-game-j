import { useState } from "react";
import "./Scoreboard.css";

export default function Scoreboard(props) {
  const [playerName, setPlayerName] = useState(`Player ${props.i + 1}`);
  const [playerScore, setPlayerScore] = useState(0);

  function changePlayerName(input) {
    setPlayerName(input);
  }

  function increasePlayerScore() {
    setPlayerScore((prevScore) => Number(prevScore) + 100);
  }

  function decreasePlayerScore() {
    setPlayerScore((prevScore) => Number(prevScore) - 100);
  }

  // function changePlayerScore(input) {
  //   setPlayerScore((prevScore) => {
  //     const isValid = /^-?\d*\.?\d*$/.test(input);
  //     if (isValid) {
  //       return input;
  //     } else {
  //       return prevScore;
  //     }
  //   });
  // }

  return (
    <div>
      <div className="player-card">
        <input
          type="text"
          value={playerName}
          className="name-display"
          onChange={(e) => changePlayerName(e.target.value)}
        />
        <input
          type="text"
          className="score-display"
          value={playerScore}
          readOnly
        />
        <div className="score-controls">
          <div className="minus" onClick={decreasePlayerScore}>
            -
          </div>
          <div className="plus" onClick={increasePlayerScore}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}
