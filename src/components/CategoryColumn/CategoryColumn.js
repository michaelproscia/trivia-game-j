import "./CategoryColumn.css";
import { useState } from "react";

export default function CategoryColumn(props) {
  function handleClick(clue) {
    clue.isClicked = !clue.isClicked;
    console.log(clue);
  }
  props.data.clues.length = 5;

  const clueysArr = props.data.clues.map((clue) => ({
    ...clue,
    isClicked: false,
  }));
  const cluesArr = clueysArr.map((clue, i) => {
    if (!clue.isClicked) {
      return (
        <div className="question-box" onClick={() => handleClick(clue)}>
          {i === 0 ? 100 : i * 100 + 100}
        </div>
      );
    } else {
      return (
        <div className="question-box" onClick={() => handleClick(clue)}>
          {clue.question}
        </div>
      );
    }
  });

  return (
    <div>
      <div className="category-title">{props.data.title.toUpperCase()}</div>
      <div className="question-box">{cluesArr}</div>
    </div>
  );
}
