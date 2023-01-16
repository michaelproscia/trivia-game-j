import "./App.css";
import { useEffect, useState } from "react";
import CategoryColumn from "./components/CategoryColumn/CategoryColumn";
import { nanoid } from "nanoid";

function App() {
  //Set state for data
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);
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

  useEffect(() => {
    const newArr = data.map((datum) => ({
      ...datum,
      clues: datum.clues.map((clue) => ({
        ...clue,
        isClicked: false,
        isAnswered: false,
        isAnswerRevealed: false,
      })),
    }));
    setResults(newArr);
  }, [data]);

  function handleGameStart() {
    setIsGameStarted(true);
  }

  function handleIsClicked(input) {
    setResults((prevResults) => {
      const newArr = prevResults.map((datum) => ({
        ...datum,
        clues: datum.clues.map((clue) => {
          if (input === clue.question) {
            return {
              ...clue,
              isClicked: !clue.isClicked,
              isAnswered: true,
            };
          } else {
            return clue;
          }
        }),
      }));
      return newArr;
    });
  }

  function handleIsAnswerRevealed(input) {
    setResults((prevResults) => {
      const newArr = prevResults.map((datum) => ({
        ...datum,
        clues: datum.clues.map((clue) => {
          if (input === clue.question) {
            return {
              ...clue,
              isAnswerRevealed: !clue.isAnswerRevealed,
            };
          } else {
            return clue;
          }
        }),
      }));
      return newArr;
    });
  }

  const columnsArr = results.map((col, i) => {
    if (i < 6) {
      return (
        <CategoryColumn
          key={nanoid()}
          data={col}
          handleIsClicked={handleIsClicked}
          handleIsAnswerRevealed={handleIsAnswerRevealed}
        />
      );
    }
  });

  return (
    <div className="game-board">
      {!isGameStarted && (
        <div>
          <h1 id="main-title">Endangerment!</h1>
          <button className="start-button" onClick={handleGameStart}>
            Start
          </button>
          <h2 id="author-credit">Created by Mike Proscia and Joe O'Keefe</h2>
          <h3 id="data-credit">Made with jservice API</h3>
        </div>
      )}
      {isGameStarted && columnsArr}
    </div>
  );
}

export default App;
