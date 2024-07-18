import { useQuestion } from "../contexts/questionContext";

export default function NextButton() {
  const { dispatch, answer, index, questions } = useQuestion();
  const questionsLength = questions.length;
  if (answer === null) return;
  if (index < questionsLength - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "nextQuestion" });
        }}
      >
        Next
      </button>
    );
  }
  if (index === questionsLength - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "finished" });
        }}
      >
        Finish
      </button>
    );
  }
}
