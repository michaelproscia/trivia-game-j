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
        <button
          className="clicked-clue"
          onClick={(e) => props.handleIsClicked(e.target.dataset.key)}
          data-key={clue.question}
        >
          {clue.question}
        </button>
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
