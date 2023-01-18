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

  function changePlayerScore(input) {
    setPlayerScore((prevScore) => {
      const num = isNaN(Number(input)) || !input ? prevScore : input;
      return num;
    });
  }

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
          onChange={(e) => changePlayerScore(e.target.value)}
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
