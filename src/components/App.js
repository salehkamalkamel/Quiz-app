import Header from "./Header.js";
import Main from "./Main.js";
import Loader from "./Loader.js";
import Error from "./Error.js";
import StartScreen from "./StartScreen.js";
import Question from "./Question.js";
import NextButton from "./NextButton.js";
import Progress from "./Progress.js";
import FinishScreen from "./FinishScreen.js";
import Timer from "./Timer.js";
import Footer from "./Footer.js";
import { QuestionProvider, useQuestion } from "../contexts/questionContext.jsx";
import questions from "../data/questions.js";
import { useEffect } from "react";

function InnerApp() {
  const { dispatch, status } = useQuestion();
  useEffect(() => {
    dispatch({ type: "dataReceived", payload: questions });
  }, [dispatch]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const res = await fetch("http://localhost:9000/questions");
  //       const data = await res.json();
  //       dispatch({ type: "dataReceived", payload: data });
  //     } catch (err) {
  //       dispatch({ type: "dataFailed" });
  //     }
  //   }
  //   getData();
  // }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "start" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <NextButton />
              <Timer />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

function App() {
  return (
    <QuestionProvider>
      <InnerApp />
    </QuestionProvider>
  );
}

export default App;
