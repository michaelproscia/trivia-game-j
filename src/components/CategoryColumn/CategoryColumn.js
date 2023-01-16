import "./CategoryColumn.css";

export default function CategoryColumn(props) {
  props.data.clues.length = 5;

  const cluesArr = props.data.clues.map((clue, i) => {
    function generateStyles() {
      if (clue.isClicked) {
        return { visibility: "hidden" };
      }
    }

    function generateNumText() {
      if (clue.isAnswered === false && i === 0) {
        return 100;
      } else if (clue.isAnswered === false && i !== 0) {
        return i * 100 + 100;
      } else if (clue.isAnswered === true) {
        return "";
      }
    }

    if (!clue.isClicked) {
      return (
        <button
          style={generateStyles()}
          className="question-box"
          onClick={(e) => props.handleIsClicked(e.target.dataset.key)}
          data-key={clue.question}
        >
          {generateNumText()}
        </button>
      );
    } else {
      return (
        <div className="question-popup">
          <div className="question-container">
            <div className="clicked-clue" data-key={clue.question}>
              {clue.question}
            </div>
            <button
              className="answer-button"
              onClick={(e) =>
                props.handleIsAnswerRevealed(e.target.dataset.key)
              }
              data-key={clue.question}
            >
              Answer
            </button>
            {clue.isAnswerRevealed && (
              <div className="answer">{clue.answer}</div>
            )}
            <button
              className="go-back-button"
              onClick={(e) => props.handleIsClicked(e.target.dataset.key)}
              data-key={clue.question}
            >
              Go Back
            </button>
          </div>
        </div>
      );
    }
  });

  return (
    <div>
      <div className="category-title">{props.data.title.toUpperCase()}</div>
      <div className="column">{cluesArr}</div>
    </div>
  );
}
