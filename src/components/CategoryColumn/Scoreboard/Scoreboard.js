import { useState } from "react";
import "./Scoreboard.css";

export default function Scoreboard(props) {
  const [playerName, setPlayerName] = useState(`Player ${props.i}`);

  return (
    <div>
      <div className="player-card">
        <input type="text" value={playerName} className="name-display" />
        <input type="number" className="score-display" value={0} readOnly />
        <div className="score-controls">
          <div className="minus">-</div>
          <div className="plus">+</div>
        </div>
      </div>
    </div>
  );
}
