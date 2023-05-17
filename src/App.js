import React, {useState} from 'react';
import logo from "./logo.svg";
import "./App.css";

// contains the data needed to load the questions 
const data = [
  [ {
    name: "q1",
    value: false,
    for: "Kpop",
    text:"Kpop"
  }, {
    name: "q1",
    value: false,
    for: "Indie",
    text:"Indie"
  }, {
    name: "q1",
    value: false,
    for: "Indian",
    text: "Indian"
  } , {
    name: "q1",
    value: true,
    for: "Whatever",
    text: "Whatever"
  } ],
  [{
    name: "q2",
    value: false,
    for: "italian",
    text:"Italian Food"
  },{
    name: "q2",
    value: false,
    for: "mexican",
    text:"Mexican Food"
  },{
    name: "q2",
    value: true,
    for: "indian",
    text:"Indian Food"
  },{
    name: "q2",
    value: false,
    for: "thai",
    text:"Thai Food"
  }],
  [{
    name: "q3",
    value: false,
    for: "crows",
    text:"Crows 🦅"
  },{
    name: "q3",
    value: false,
    for: "snake",
    text:"Snakes 🐍"
  }, {
    name: "q3",
    value: true,
    for: "snails",
    text:"Snails 🐌"
  }, {
    name: "q3",
    value: false,
    for: "spiders",
    text:"Spiders 🕷️"
  }],
  [{
    name: "q4",
    value: false,
    for: "bubbletea",
    text:"Bubble Tea 🧋"
  },{
    name: "q4",
    value: false,
    for: "lettuce",
    text:"Lettuce 🥬"
  },{
    name: "q4",
    value: false,
    for: "curry",
    text:"Curry 🥘 "
  },{
    name: "q4",
    value: true,
    for: "potatoes",
    text:"Potatoes 🥔 "
  }],
  [{
    name: "q5",
    value: false,
    for: "gamesdesigner",
    text:"Computer games designer"
  },{
    name: "q5",
    value: false,
    for: "interiordes",
    text:"Interior Designer"
  },{
    name: "q5",
    value: true,
    for: "astronaut",
    text:"Astronaut"
  },{
    name: "q5",
    value: false,
    for: "doctor",
    text:"Doctor"
  }]
]

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
function Question(props){
  console.log(props.numRight);
  const classOfText = props.applyResult ? "right" : "false"
  const answer = props.selectedAnswer

  return(
    <> 
      {data[props.number].map((el, index) => {
        return <Button className={classOfText} onClick={(event) => {
          // props.setNumRight(data[props.number][index].value ? props.numRight + 1 : props.numRight + 0)
          props.handleChange(event);
          props.setSelectedAnswer((answer) => ({ ...answer, [props.number]: data[props.number][index].text}));
        }} 
        name={data[props.number][index].name} value={data[props.number][index].value} for={data[props.number][index].for} text={data[props.number][index].text} />
      })}
    </>
  );
}


function Quiz() {
  // const [numRight, setNumRight] = useState(0);
  const [showResultText, setShowResultText] = useState(false);
  const [applyResult, setApplyResult] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [numsRight, setNumsRight] = useState(0);
  console.log(numsRight); // works but if you reclick on right option it still adds one will fix this later
  console.log(selectedAnswer);

  const handleChange = event => {
    console.log("LOAF HANDLECHANGE", event.target.value)
    if (event.target.checked ) {
      console.log("loaf checked", event.target.value)
      if (event.target.value === 'true') {
        setApplyResult(true);
      } else {
        setApplyResult(false);
      }
    } 
  }
  
  function findNumRight() {
    let numsRight = 0;
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
        <Question number={0} setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer} correctAnswer={"Whatever"}  numsRight={numsRight} applyResult={applyResult} handleChange={handleChange}/>
      </div>


      {/* <!-- question 2 -->  */}
      <div className="question-container">
        <p className="question-header">
          Question 2: <br /> What is my favorite cuisine?
        </p>
        <Question number={1} setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer} correctAnswer={"Indian Food"}  numsRight={numsRight} applyResult={applyResult} handleChange={handleChange}/>
      </div>

      {/* <!-- question 3 --> */}
      <div className="question-container">
        <p className="question-header">
          Question 3: <br /> What animal am I really scared of?
        </p>
        <Question number={2} setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer} correctAnswer={"Snails 🐌"}  numsRight={numsRight} applyResult={applyResult} handleChange={handleChange}/>
      </div>

      {/* <!-- question 4 -->  */}
      <div className="question-container">
        <p className="question-header">
          Question 4: <br /> What would I consume for the rest of my life if I
          had to?
        </p>
        <Question number={3} setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer} correctAnswer={"Potatoes 🥔"}  numsRight={numsRight} applyResult={applyResult} handleChange={handleChange}/>
      </div>

      {/* <!-- question 5 --> */}
      <div className="question-container">
        <p className="question-header">
          Question 5: <br /> What was my dream occupation as a child?
        </p>
        <Question number={4} setSelectedAnswer={setSelectedAnswer} selectedAnswer={selectedAnswer} correctAnswer={"Astronaut"}  numsRight={numsRight} applyResult={applyResult} handleChange={handleChange}/>
      </div>

      <div id="button-submit">
        {console.log(showResultText)}
        <button type="submit" onClick={(e) => {setShowResultText(true); handleChange(e); }}>
          Submit
        </button>
      </div>

      <p id="footer">{showResultText ? `You got ${findNumRight()} correct!` : "Thank you for playing this quiz!"}</p>
      {console.log(showResultText)}
    </>
  );
}

export default Quiz;




