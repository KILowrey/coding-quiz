// DElements
const quesChoices = document.getElementById('ques-choices'); // connected to the html which connects to questions.js

// Timer stuff
const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");
const totalSeconds = 240;
let secondsElapsed = 0;

// initial values
let currentQuesIndex = 0;
let correctQuesIndex = 0;

// buttons for navigation
const startBtn = document.querySelector(".start-quiz");

// page sections
const welcomeSec = document.getElementById("welcome");
const playQuizSec = document.getElementById("play-quiz");

startBtn.addEventListener("click", function() {
  welcomeSec.innerHTML = "";
  playQuizSec.classList.remove("d-none");
  getQuestion();
  runTimer();
});

// get questions
function getQuestion() {
  console.log("getQuestion is running");
  // get the first question
  let currentQuestion = questions[currentQuesIndex];
  // update ques-title to QuesTitle
  let quesTitleEl = document.querySelector('#ques-title');
  quesTitleEl.textContent = currentQuestion.QuesTitle;
  // clear previous answer
  quesChoices.innerHTML = '';
  // list out the optionts
  currentQuestion.options.forEach(function(option, i) {
    // make a button for each option
    let optionButton = document.createElement("button");
    optionButton.setAttribute("type", "button");
    // event listener
    optionButton.onclick = answerClick;
    // display the button
    answerChoices.appendChild(optionButton);
  });
}

// check answer
function choiceClick() {
  // check if wrong
  if (this.value === questions[currentQuesIndex].answer) {
    correctQuesIndex++;
  } else {
    secondsElapsed = (secondsElapsed + 30);
    if (secondsElapsed >= totalSeconds) {
      stopTimer();
    }
  }
  // go to next question
  currentQuesIndex++;
  // make sure we're not at the end
  if (currentQuesIndex === questions.length) {
    endQuiz();
  } else {
    getQuestion();
  }
}

function endQuiz() {
  //go to highscores.html
  // hide the list and show the submit
  //once page is rendered
    //take secondsLeft (from function runTimer) and multiply by correctQuesIndex (the number of questions they got correct)
    // return above number as score
}


function runTimer () {
  // These two functions are just for making sure the numbers look nice for the html elements
  function getFormattedMinutes() {
    var secondsLeft = totalSeconds - secondsElapsed;
    var minutesLeft = Math.floor(secondsLeft / 60);
    var formattedMinutes;
    if (minutesLeft < 10) {
      formattedMinutes = "0" + minutesLeft;
    } else {
      formattedMinutes = minutesLeft;
    }
    return formattedMinutes;
  }
  function getFormattedSeconds() {
    var secondsLeft = (totalSeconds - secondsElapsed) % 60;
    var formattedSeconds;
    if (secondsLeft < 10) {
      formattedSeconds = "0" + secondsLeft;
    } else {
      formattedSeconds = secondsLeft;
    }
    return formattedSeconds;
  }
  // print the times live
  function renderTime() {
    // When renderTime is called it sets the textContent for the timer html...
    minutesDisplay.textContent = getFormattedMinutes();
    secondsDisplay.textContent = getFormattedSeconds();
    // ..and then checks to see if the time has run out
    if (secondsElapsed >= totalSeconds) {
      stopTimer();
    }
  }
  // start and stop the timer
  function startTimer() {
    setTimeout();
    interval = setInterval(function() {
      secondsElapsed++;
      renderTime();
    }, 1000);
  }
  function stopTimer() {
    secondsElapsed = 0;
    setTimeout();
    renderTime();
  }
  return secondsLeft.value
}