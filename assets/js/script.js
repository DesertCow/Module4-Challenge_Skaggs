// Clayton Skaggs
// 5-22-2022
// ==================== Varriable Decleration =====================

// Debug Switch
var Debug = false;

// Set Game Length (Seconds)
var gameLength = 15;

var startButton = document.querySelector(".start-button");
var highScoreButton = document.querySelector(".highScore-button");
var ansButton1 = $('#btn-answer1');
var ansButton2 = $('#btn-answer2');
var ansButton3 = $('#btn-answer3');
var ansButton4 = $('#btn-answer4');


var highScoreCard = document.getElementById("highScoreCard");
var questionCard = document.getElementById("questionCard");

var score1EL = document.querySelector(".score1");
var score2EL = document.querySelector(".score2");
var score3EL = document.querySelector(".score3");
var score4EL = document.querySelector(".score4");
var score5EL = document.querySelector(".score5");

var questionEL = document.querySelector(".question");
var answer1El = document.querySelector(".answer1");
var answer2El = document.querySelector(".answer2");
var answer3El = document.querySelector(".answer3");
var answer4El = document.querySelector(".answer4");

var timerEl = document.querySelector(".displayTimer");
var lastResult = document.querySelector(".lastResult");

var currentTime = 0;
var userAnswerSelection = "";
var userAnswerProvided = false;
var currentCorrectAnswer = "VOID";
var currentUserScore = 0;
var currentQuestionCount = 0;

var questionCountEl = document.querySelector(".questionCount");

let questionArray = [
  {
    "question": "What is the most expensive painting to be sold at auction?",
    "a1": "The Starry Night",
    "a2": "Salvator Mundi",
    "a3": "Mona Lisa",
    "a4": "Love is in the Bin",
    "correct": "a2",

  },
  {
    "question": "What is the name of the world's deepest Lake?",
    "a1": "Lake Texoma (TX/OK)",
    "a2": "Crater Lake (OR)",
    "a3": "Lake Tahoe (CA)",
    "a4": "Lake Baikal (RUS)",
    "correct": "a4",

  },
  {
    "question": "What is the only U.S. state with a Spanish motto?",
    "a1": "Texas",
    "a2": "Californa",
    "a3": "Montana",
    "a4": "Arizona",
    "correct": "a3",

  },
  {
    "question": "How many of the speeches in Shakespeare's plays are delivered by women?",
    "a1": "17%",
    "a2": "44%",
    "a3": "73%",
    "a4": "4%",
    "correct": "a1",

  },
  {
    "question": "What Planet Does Not Have a Moon?",
    "a1": "Earth",
    "a2": "Mercury",
    "a3": "Mars",
    "a4": "Jupiter",
    "correct": "a2",

  },
]

// ################# Define Click Listeners #################

ansButton1.on('click', function () {
  console.log("Answer 1 Selected!");
  userAnswerSelection = "a1";
  userAnswerProvided = true;
  userAnswered(userAnswerSelection, currentCorrectAnswer);
  console.log("User = " + userAnswerSelection + " || SelectionFlag = " + userAnswerProvided);
});

ansButton2.on('click', function () {
  console.log("Answer 2 Selected!");
  userAnswerSelection = "a2";
  userAnswerProvided = true;
  userAnswered(userAnswerSelection, currentCorrectAnswer);
  console.log("User = " + userAnswerSelection + " || SelectionFlag = " + userAnswerProvided);
});

ansButton3.on('click', function () {
  console.log("Answer 3 Selected!");
  userAnswerSelection = "a3";
  userAnswerProvided = true;
  userAnswered(userAnswerSelection, currentCorrectAnswer);
  console.log("User = " + userAnswerSelection + " || SelectionFlag = " + userAnswerProvided);
});

ansButton4.on('click', function () {
  console.log("Answer 4 Selected!");
  userAnswerSelection = "a4";
  userAnswerProvided = true;
  userAnswered(userAnswerSelection, currentCorrectAnswer);
  console.log("User = " + userAnswerSelection + " || SelectionFlag = " + userAnswerProvided);
});

function userAnswered(user, correct) {
  if (user === correct) {
    // User Selected Correct Answer -> Next Question
    currentUserScore++;
    console.log("User Selected Correct Answer || " + user + "==" + correct + "Score = " + currentUserScore);
    nextQuestion();
  }
  else {
    // User Selected INCORRECT Answer [Dock Time] -> Next Question
    console.log("User Selected Incorrect Answer || " + user + "!=" + correct);
    currentTime = currentTime - 5;
    nextQuestion();
  }
}


// ################# Create Array For Top 5 Players #################
var score1 = {
  element: document.querySelector(".score1"),
  data: "5",
  playerInitials: "CZS"
}

var score2 = {
  element: document.querySelector(".score2"),
  data: "4",
  playerInitials: "DCF"
}
var score3 = {
  element: document.querySelector(".score3"),
  data: "3",
  playerInitials: "HDF"
}
var score4 = {
  element: document.querySelector(".score4"),
  data: "2",
  playerInitials: "LKJ"
}
var score5 = {
  element: document.querySelector(".score5"),
  data: "2",
  playerInitials: "MKD"
}

// ==================== Button Listeners  =====================
startButton.addEventListener("click", startGame);
highScoreButton.addEventListener("click", displayHighScore);

// ==================== Function Decleration  =====================

// ################# FUNC_NAME #################


// ################# FUNC_NAME #################





// ################# askQuestion #################

// function askQuestion(questionArray, answerArray, questionNumber) {
// function askQuestion(qArray) {

//   for (var i = 0; i < qArray.length; i++) {
//     var iPlus = i + 1;
//     questionEL.textContent = qArray[i].question;
//     answer1El.textContent = qArray[i].a1;
//     answer2El.textContent = qArray[i].a2;
//     answer3El.textContent = qArray[i].a3;
//     answer4El.textContent = qArray[i].a4;

//     questionCountEl.textContent = "Question #" + iPlus;
//     console.log(questionEL.textContent);
//     // questionEL.textContent = "How many items are in a dozen?";
//   }

//   // questionEL.textContent = "How many items are in a dozen?";
// }



// ################# displayHighScore #################

function displayHighScore() {

  questionCard.style.display = "none";
  highScoreCard.style.display = "block";
  score1EL.textContent = "#1: " + score1.data + " - " + score1.playerInitials;
  score2EL.textContent = "#2: " + score2.data + " - " + score2.playerInitials;
  score3EL.textContent = "#3: " + score3.data + " - " + score3.playerInitials;
  score4EL.textContent = "#4: " + score4.data + " - " + score4.playerInitials;
  score5EL.textContent = "#5: " + score5.data + " - " + score5.playerInitials;

}

// ################# countdown #################
function countdown() {
  console.log("T1= " + currentTime);

  var timeInterval = setInterval(function () {
    currentTime--;
    console.log("Waiting 1 sec! T= " + currentTime);
    timerEl.textContent = currentTime + " s";

    if (currentTime <= 0) {
      clearInterval(timeInterval);
      userAnswerProvided = true;
      gameOver();
      // Add End Game Logic | Pass player score

      // window.alert("Count Down Complete!")
      // displayMessage();
    }

    //Loop at Feq = 1000ms / 1sec
  }, 1000);

}
// ################# FUNC_NAME #################
function gameOver() {
  console.log("GAME OVER!");

  // Hide Question from User
  questionCard.style.display = "none";
  //finalScore();
}

function finalScore() {
  console.log("FINAL SCORE LOGIC!");
  finalScoreCard.style.display = "block";
}

// ################# askQuestion #################
function askQuestion(askObj) {

  //   console.log("Q :" + askObj.question);
  //   console.log("a1: " + askObj.a1);

  questionEL.textContent = askObj.question;
  answer1El.textContent = askObj.a1;
  answer2El.textContent = askObj.a2;
  answer3El.textContent = askObj.a3;
  answer4El.textContent = askObj.a4;

  currentCorrectAnswer = askObj.correct;
  console.log("Answer = " + currentCorrectAnswer);

  //   // Wait For user Response
  //   // var responseWait = setInterval(function () {

  //   //   if (userAnswerProvided === false) {
  //   //     //   // Contioisuly Check if user has selected an answer
  //   //     console.log("Current Time = " + currentTime);
  //   //     console.log("Waiting for user to select an answer...");
  //   //   }

  //   // }, 500);


  //   console.log("User HAS Selected! = " + userAnswerSelection);
  //   //}
  //   //gameOver();
  //   // if ( === askObj.correct)

  //   //   return;
}

// ################# FUNC_NAME #################
function startGame() {
  questionCard.style.display = "block";
  highScoreCard.style.display = "none";

  let currentQuestionObj = {

    "question": questionArray[currentQuestionCount].question,
    "a1": questionArray[currentQuestionCount].a1,
    "a2": questionArray[currentQuestionCount].a2,
    "a3": questionArray[currentQuestionCount].a3,
    "a4": questionArray[currentQuestionCount].a4,
    "correct": questionArray[currentQuestionCount].correct,

    // "question": "What is the most expensive painting to be sold at auction?",
    // "a1": "The Starry Night",
    // "a2": "Salvator Mundi",
    // "a3": "Mona Lisa",
    // "a4": "Love is in the Bin",
    // "correct": "a2",
  }

  countdown();
  askQuestion(currentQuestionObj);

}

function nextQuestion() {

  currentQuestionCount++;

  let currentQuestionObj = {

    "question": questionArray[currentQuestionCount].question,
    "a1": questionArray[currentQuestionCount].a1,
    "a2": questionArray[currentQuestionCount].a2,
    "a3": questionArray[currentQuestionCount].a3,
    "a4": questionArray[currentQuestionCount].a4,
    "correct": questionArray[currentQuestionCount].correct,
  }

  askQuestion(currentQuestionObj);

}

function init() {

  // Hide High Score Screen at first
  highScoreCard.style.display = "none";
  questionCard.style.display = "none";

  // Set Starting Time
  currentTime = gameLength;
  timerEl.textContent = currentTime + " s";
  lastResult.textContent = "";

}


// =========================== MAIN  ==============================

init();


// =========================== END MAIN  ==========================
