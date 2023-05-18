import React, {useState} from 'react';
import logo from "./logo.svg";
import "./App.css";

// contains the data needed to load the questions 


const correctAnswer = [
  "Whatever",
  "Indian Food",
  "Snails 🐌",
  "Potatoes 🥔",
  "Astronaut"
]



//functional component that forms a single button
function Button(props) {
  return (
    <div>
    <input type="radio" name={props.name} value={props.value} onClick={props.onClick} />
    <label className={props.className} for={props.for}>{props.text}</label> <br />
  </div>
  );
}

//loads data and multiple button options to form an actual question
function Question({number, question, showResult, setSelectedAnswer, selectedAnswer, handleChange}){
  // const classOfText = props.applyResult ? "right" : "false"
  
  return(
    <> 
      {question.map((answer) => {
        let className = "";
        if (showResult && selectedAnswer == answer.text) {
          className = answer.value ? "right" : "wrong"
        }
        
        return <Button className={className} onClick={(event) => {
          // setNumRight(answer.value ? numRight + 1 : numRight + 0)
          handleChange(event);
          setSelectedAnswer((globalAnswerData) => ({ ...globalAnswerData, [number]: answer.text}));
        }} 
        name={answer.name} value={answer.value} for={answer.for} text={answer.text} />
      })}
    </>
  );
}


function Quiz({questions}) {
  // const [numRight, setNumRight] = useState(0);
  const [showResultText, setShowResultText] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  let numsRight = 0;
  console.log(numsRight); // works but if you reclick on right option it still adds one will fix this later
  console.log(selectedAnswer);

  const handleChange = event => {
    
  }
  
  function findNumRight() {
    for (let i=0 ; i < correctAnswer.length; i++ ) {
      if (correctAnswer[i] === selectedAnswer[i]) {
        numsRight += 1
      }
    }
    console.log(selectedAnswer);
    return numsRight
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

      {/* <!-- question 1 --> */}
      <div className="question-container">
        <p className="question-header">
          Question 1: <br /> What genre of music do I like?
        </p>
        <Question number={0} question={questions[0]} showResult={showResult} setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer[0]} correctAnswer={"Whatever"}  numsRight={numsRight} handleChange={handleChange}/>
      </div>


      {/* <!-- question 2 -->  */}
      <div className="question-container">
        <p className="question-header">
          Question 2: <br /> What is my favorite cuisine?
        </p>
        <Question number={1} question={questions[1]} showResult={showResult} setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer[1]} correctAnswer={"Indian Food"}  numsRight={numsRight} handleChange={handleChange}/>
      </div>

      {/* <!-- question 3 --> */}
      <div className="question-container">
        <p className="question-header">
          Question 3: <br /> What animal am I really scared of?
        </p>
        <Question number={2} question={questions[2]} showResult={showResult} setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer[2]} correctAnswer={"Snails 🐌"}  numsRight={numsRight} handleChange={handleChange}/>
      </div>

      {/* <!-- question 4 -->  */}
      <div className="question-container">
        <p className="question-header">
          Question 4: <br /> What would I consume for the rest of my life if I
          had to?
        </p>
        <Question number={3} question={questions[3]} showResult={showResult} setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer[3]} correctAnswer={"Potatoes 🥔"}  numsRight={numsRight} handleChange={handleChange}/>
      </div>

      {/* <!-- question 5 --> */}
      <div className="question-container">
        <p className="question-header">
          Question 5: <br /> What was my dream occupation as a child?
        </p>
        <Question number={4} question={questions[4]} showResult={showResult} setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer[4]} correctAnswer={"Astronaut"}  numsRight={numsRight} handleChange={handleChange}/>
      </div>

      <div id="button-submit">
        {console.log(showResultText)}
        <button type="submit" onClick={(e) => {setShowResultText(true); handleChange(e); setShowResult(true); }}>
          Submit
        </button>
      </div>

      <p id="footer">{showResultText ? `You got ${findNumRight()} correct!` : "Thank you for playing this quiz!"}</p>
      {console.log(showResultText)}
    </>
  );
}

export default Quiz;




