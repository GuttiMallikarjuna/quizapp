import { useState } from "react";
import quiz from "./questions";
import "./quiz.css";
import Resultpage from "./resultpage";
import Navigation from "./navigation";

const Quiz = (props) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showAnswers, setShowAnswers] = useState(false);
  const [yourAnswer,setYourAnswer]=useState([]);
  // const [totalSeconds, setTotalSeconds] = useState(0);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  // useEffect(() => {
  //   // Update the timer every second
  //   const timer = setInterval(() => {
  //     setTotalSeconds(prevTotalSeconds => prevTotalSeconds + 1);
  //   }, 1000);

  //   // Clean up the interval when the component unmounts
  //   return () => clearInterval(timer);
  // }, []);

  // const minutes = Math.floor(totalSeconds / 60);
  // const seconds = totalSeconds % 60;

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    // console.log(answer)
    setYourAnswer(prev=>{
      return [...prev,answer]
    })
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };
  const tryagainclick = () => {
    window.location.reload();
  };
  const backclick = () => {
    window.location.reload();
  };
  const closeclick = () => {
    //  window.location.reload();
    document.querySelector('.result').style.display='block';
    setShowAnswers(false);
  };
  const handleShowAnswers = () => {
    setShowAnswers(true);
    document.querySelector('.result').style.display='none';
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <>
    <Navigation/>
    <div className="quiz-container">
      {!showResult ? (
        <div className="questionsdiv">
          <div className="timerdiv">
            <div>
              <span className="active-question-no">
                {addLeadingZero(activeQuestion + 1)}
              </span>
              <span className="total-question">
                /{addLeadingZero(questions.length)}
              </span>
            </div>
            {/* <div>{minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds}</div> */}
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                id="inputs"
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? "selected-answer" : null
                }
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button
            className="btnn"
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <Resultpage questions={questions} result={result} handleShowAnswers={handleShowAnswers} backclick={backclick} tryagainclick={tryagainclick}/>
      )}
      {/* {showAnswers && (
            <div id="showanswers" style={{ marginTop: "20px" }}>
              <div className="d-flex justify-content-between">
              <h2>Selected Answers and Correct Answers</h2>
              <i style={{cursor:'pointer'}} onClick={closeclick} class="bi bi-x-square-fill"></i>
              </div>
              <br/>
              {questions.map((question, index) => (
                <div key={index}>
                  <p style={{ backgroundColor: "grey", padding: "5px", color:'white'}}>
                    Q) {question.question}
                  </p>
                  <p style={{
                      backgroundColor: "yellow",
                      padding: "5px",
                      color: "black",
                    }}
                  >Your Answer: {yourAnswer[index]}</p>
                  <p
                    style={{
                      backgroundColor: "green",
                      padding: "5px",
                      color: "white",
                    }}
                  >
                   Correct Answer: {question.correctAnswer}
                  </p>
                </div>
              ))}
            </div>
          )} */}

{showAnswers && (
            <div id="showanswers" style={{ marginTop: "20px" }}>
              <div className="d-flex justify-content-between">
              <h2>Selected Answers and Correct Answers</h2>
              <i style={{cursor:'pointer'}} onClick={closeclick} class="bi bi-x-square-fill"></i>
              </div>
              <br/>
              {questions.map((question, index) => (
                <div key={index}>
                  {/* <p style={{ backgroundColor: "grey", padding: "5px", color:'white'}}>
                    Q) {question.question}
                  </p> */}
                  <div className="card m-4">
                    <div className="card-header">
                      <h6>Q) {question.question}</h6>
                    </div>
                    <div className="card-body">
                      <p>Your Answer: {yourAnswer[index]}</p>
                      {/* <ul className="unorderedlist">
                          {question.choices.map((answer, index) => (
                            <li
                              id="inp"
                              // onClick={() => onAnswerSelected(answer, index)}
                              key={answer}
                              // className={
                              //   selectedAnswerIndex === index ? "selected-answer" : null
                              // }
                            >
                              {answer}
                            </li>
                          ))}
                      </ul> */}
                    </div>
                    <div className="card-footer">
                      <p>Correct Answer: {question.correctAnswer}</p>
                    </div>
                  </div>
                  {/* <p style={{
                      backgroundColor: "yellow",
                      padding: "5px",
                      color: "black",
                    }}
                  >Your Answer: {yourAnswer[index]}</p>
                  <p
                    style={{
                      backgroundColor: "green",
                      padding: "5px",
                      color: "white",
                    }}
                  >
                   Correct Answer: {question.correctAnswer}
                  </p> */}
                </div>
              ))}
            </div>
          )}
    </div>
    </>
  );
};

export default Quiz;
