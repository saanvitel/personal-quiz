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
        <input type="radio" name="q2" value="wrong" />
        <label for="italian"> Italian food </label> <br />
        <input type="radio" name="q2" value="wrong" />
        <label for="mexican"> Mexican food </label> <br />
        <input type="radio" name="q2" value="right" />
        <label for="Indian-food"> Indian food </label> <br />
        <input type="radio" name="q2" value="wrong" />
        <label for="thai"> Thai food </label>
      </div>

      {/* <!-- question 3 --> */}
      <div class="question-container">
        <p class="question-header">
          Question 3: <br /> What animal am I really scared of?
        </p>
        <input type="radio" name="q3" value="wrong" />
        <label for="crows"> Crows 🦅 </label> <br />
        <input type="radio" name="q3" value="wrong" />
        <label for="snake"> Snakes 🐍 </label> <br />
        <input type="radio" name="q3" value="right" />
        <label for="snails"> Snails 🐌 </label> <br />
        <input type="radio" name="q3" value="wrong" />
        <label for="spider"> Spiders 🕷️ </label>
      </div>

      {/* <!-- question 4 -->  */}
      <div class="question-container">
        <p class="question-header">
          Question 4: <br /> What would I consume for the rest of my life if I
          had to?
        </p>
        <input type="radio" name="q4" value="wrong" />
        <label for="bubbletea"> Bubble Tea 🧋 </label> <br />
        <input type="radio" name="q4" value="wrong" />
        <label for="lettuce"> Lettuce 🥬 </label> <br />
        <input type="radio" name="q4" value="wrong" />
        <label for="curry"> Curry 🥘 </label> <br />
        <input type="radio" name="q4" value="right" />
        <label for="potato"> Potatoes 🥔 </label>
      </div>

      {/* <!-- question 5 --> */}
      <div class="question-container">
        <p class="question-header">
          Question 5: <br /> What was my dream occupation as a child?
        </p>
        <input type="radio" name="q5" value="wrong" />
        <label for="gamesdesigner"> Computer games designer </label> <br />
        <input type="radio" name="q5" value="wrong" />
        <label for="interiordes"> Interior Designer </label> <br />
        <input type="radio" name="q5" value="right" />
        <label for="astronaut"> Astronaut </label> <br />
        <input type="radio" name="q5" value="wrong" />
        <label for="doctor"> Doctor </label>
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




