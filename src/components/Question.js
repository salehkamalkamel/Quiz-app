import { useQuestion } from "../contexts/questionContext";
import Options from "./Options";

export default function Question() {
  const { questions, dispatch, answer, index } = useQuestion();
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
