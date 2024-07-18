import { useQuestion } from "../contexts/questionContext";

export default function Progress() {
  const { points, index, questions, answer } = useQuestion();
  const maxPossiblePoints = questions.reduce((prev, cur) => {
    return prev + cur.points;
  }, 0);
  const numQuestions = questions.length;

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
