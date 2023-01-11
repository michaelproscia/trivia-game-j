import "./App.css";
import { useEffect, useState } from "react";
import CategoryColumn from "./components/CategoryColumn/CategoryColumn";
import { nanoid } from "nanoid";

function App() {
  //Set state for data
  const [data, setData] = useState([]);
  const [isGameStarted, setIsGameStarted] = useState(false);

  //Retrieving random category from jService
  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      fetch(
        `https:jservice.io/api/category?id=${Math.floor(Math.random() * 2000)}`
      )
        .then((res) => res.json())
        .then((data) => setData((prevData) => [...prevData, data]));
    }
  }, []);

  function handleGameStart() {
    setIsGameStarted(true);
  }

  const columnsArr = data.map((col, i) => {
    if (i < 6) {
      return <CategoryColumn key={nanoid()} data={col} />;
    }
  });

  return (
    <div className="game-board">
      {!isGameStarted && (
        <button className="start-button" onClick={handleGameStart}>
          Start
        </button>
      )}
      {isGameStarted && columnsArr}
    </div>
  );
}

export default App;
