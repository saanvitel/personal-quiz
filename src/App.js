import React from 'react';
import logo from "./logo.svg";
import "./App.css";

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
    value: false,
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
    value: false,
    for: "astronaut",
    text:"Astronaut"
  },{
    name: "q5",
    value: true,
    for: "doctor",
    text:"Doctor"
  }]
]

function Button(props) {
  return (
    <>
    <input type="radio" name={props.name} value={props.value} />
    <label for={props.for}>{props.text}</label> <br />
  </>
  );
}

function Question(props){
  return(
    <>
      {data[props.number].map((el, index) => {
        return <Button name={data[props.number][index].name} value={data[props.number][index].value} for={data[props.number][index].for} text={data[props.number][index].text} />
      })}
    </>
  );
}

function Quiz() {
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
      <div class="question-container">
        <p class="question-header">
          Question 1: <br /> What genre of music do I like?
        </p>
        <Question number={0} />
      </div>


      {/* <!-- question 2 -->  */}
      <div class="question-container">
        <p class="question-header">
          Question 2: <br /> What is my favorite cuisine?
        </p>
        <Question number={1} />
      </div>

      {/* <!-- question 3 --> */}
      <div class="question-container">
        <p class="question-header">
          Question 3: <br /> What animal am I really scared of?
        </p>
        <Question number={2} />
      </div>

      {/* <!-- question 4 -->  */}
      <div class="question-container">
        <p class="question-header">
          Question 4: <br /> What would I consume for the rest of my life if I
          had to?
        </p>
        <Question number={3} />
      </div>

      {/* <!-- question 5 --> */}
      <div class="question-container">
        <p class="question-header">
          Question 5: <br /> What was my dream occupation as a child?
        </p>
        <Question number={4} />
      </div>

      <div id="button-submit">
        <button type="submit" onclick="return getResults();">
          Submit
        </button>
      </div>

      <p id="footer"> Thank you for completing the quiz!</p>
    </>
  );
}

export default Quiz;




