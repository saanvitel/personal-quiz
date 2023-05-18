import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

//functional component that forms a single button
function Button(props) {
  return (
    <div>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        onClick={props.onClick}
      />
      <label className={props.className} for={props.for}>
        {props.text}
      </label>
      <br />
    </div>
  );
}

//loads data and multiple button options to form an actual question
function Answer({
  number,
  answers,
  showResult,
  setSelectedAnswer,
  selectedAnswer,
}) {
  return (
    <>
      {answers.map((answer) => {
        let className = "";
        if (showResult && selectedAnswer == answer.text) {
          className = answer.value ? "right" : "wrong";
        }

        return (
          <Button
            className={className}
            onClick={() => {
              // setNumRight(answer.value ? numRight + 1 : numRight + 0)
              setSelectedAnswer((globalAnswerData) => ({
                ...globalAnswerData,
                [number]: answer.text,
              }));
            }}
            name={answer.name}
            value={answer.value}
            for={answer.for}
            text={answer.text}
          />
        );
      })}
    </>
  );
}

//question that loads both formatting and headings and options all together
function Question({ question, showResult, setSelectedAnswer, selectedAnswer }) {
  const { number, text, answers } = question;
  return (
    <>
      <div className="question-container">
        <p className="question-header">{text}</p>
        <Answer
          number={number}
          answers={answers}
          showResult={showResult}
          setSelectedAnswer={setSelectedAnswer}
          selectedAnswer={selectedAnswer}
        />
      </div>
    </>
  );
}

//loads page
function Quiz({ questions }) {
  const [showResultText, setShowResultText] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  let numsRight = 0;

  const correctAnswer = [
    "Whatever",
    "Indian Food",
    "Snails 🐌",
    "Potatoes 🥔",
    "Astronaut",
  ];

  function findNumRight() {
    for (let i = 0; i < correctAnswer.length; i++) {
      if (correctAnswer[i] === selectedAnswer[i]) {
        numsRight += 1;
      }
    }
    return numsRight;
  }

  return (
    <>
      <div id="header">
        <h1>Quiz About Myself</h1>
        <p id="fancy-line"> _____________________________________________</p>
        <p id="intro">
          {" "}
          This is me creating a small quiz for myself, so I can test my ability
          to intergrate javascript, with CSS and HTML!
        </p>
      </div>

      {/* renders questions  */}
      {questions.map((question, index) => {
        return (
          <Question
            question={question}
            showResult={showResult}
            setSelectedAnswer={setSelectedAnswer}
            selectedAnswer={selectedAnswer[index]}
          />
        );
      })}

      <div id="button-submit">
        <button
          type="submit"
          onClick={(e) => {
            setShowResultText(true);
            setShowResult(true);
          }}
        >
          Submit
        </button>
      </div>

      <p id="footer">
        {showResultText
          ? `You got ${findNumRight()} correct!`
          : "Thank you for playing this quiz!"}
      </p>
    </>
  );
}

export default Quiz;
