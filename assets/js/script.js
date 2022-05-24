// Clayton Skaggs
// 5-22-2022
// ==================== Varriable Decleration =====================

// Debug Switch
var Debug = false;

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

var questionCountEl = document.querySelector(".questionCount");

let questionArray = [
  {
    "question": "Question Place Holder #1",
    "a1": "Answer Place Holder #1-1",
    "a2": "Answer Place Holder #1-2",
    "a3": "Answer Place Holder #1-3",
    "a4": "Answer Place Holder #1-4",
    "correct": "a1",

  },
  {
    "question": "Question Place Holder #2",
    "a1": "Answer Place Holder #2-1",
    "a2": "Answer Place Holder #2-2",
    "a3": "Answer Place Holder #2-3",
    "a4": "Answer Place Holder #2-4",
    "correct": "a2",

  },
  {
    "question": "Question Place Holder #3",
    "a1": "Answer Place Holder #3-1",
    "a2": "Answer Place Holder #3-2",
    "a3": "Answer Place Holder #3-3",
    "a4": "Answer Place Holder #3-4",
    "correct": "a3",

  },
  {
    "question": "Question Place Holder #4",
    "a1": "Answer Place Holder #4-1",
    "a2": "Answer Place Holder #4-2",
    "a3": "Answer Place Holder #4-3",
    "a4": "Answer Place Holder #4-4",
    "correct": "a4",

  },
  {
    "question": "Question Place Holder #5",
    "a1": "Answer Place Holder #5-1",
    "a2": "Answer Place Holder #5-2",
    "a3": "Answer Place Holder #5-3",
    "a4": "Answer Place Holder #5-4",
    "correct": "a2",

  },
]

// ################# Define Click Listeners #################

ansButton1.on('click', function () {
  console.log("Answer 1 Selected!");
});

ansButton2.on('click', function () {
  console.log("Answer 2 Selected!");
});

ansButton3.on('click', function () {
  console.log("Answer 3 Selected!");
});

ansButton4.on('click', function () {
  console.log("Answer 4 Selected!");
});

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


// ==================== Function Decleration  =====================

// ################# FUNC_NAME #################


// ################# FUNC_NAME #################


// ################# FUNC_NAME #################





// ################# FUNC_NAME #################

startButton.addEventListener("click", startGame);
highScoreButton.addEventListener("click", displayHighScore);

function startGame() {
  questionCard.style.display = "block";
  highScoreCard.style.display = "none";

  askQuestion(questionArray);


}

// ################# FUNC_NAME #################

// function askQuestion(questionArray, answerArray, questionNumber) {
function askQuestion(qArray) {

  for (var i = 0; i < qArray.length; i++) {
    var iPlus = i + 1;
    questionEL.textContent = qArray[i].question;
    answer1El.textContent = qArray[i].a1;
    answer2El.textContent = qArray[i].a2;
    answer3El.textContent = qArray[i].a3;
    answer4El.textContent = qArray[i].a4;

    questionCountEl.textContent = "Question #" + iPlus;
    console.log(questionEL.textContent);
    // questionEL.textContent = "How many items are in a dozen?";
  }

  // questionEL.textContent = "How many items are in a dozen?";


}


// ################# FUNC_NAME #################

function displayHighScore() {

  questionCard.style.display = "none";
  highScoreCard.style.display = "block";
  score1EL.textContent = "#1: " + score1.data + " - " + score1.playerInitials;
  score2EL.textContent = "#2: " + score2.data + " - " + score2.playerInitials;
  score3EL.textContent = "#3: " + score3.data + " - " + score3.playerInitials;
  score4EL.textContent = "#4: " + score4.data + " - " + score4.playerInitials;
  score5EL.textContent = "#5: " + score5.data + " - " + score5.playerInitials;

}



// =========================== MAIN  ==============================



// Hide High Score Screen at first
highScoreCard.style.display = "none";
questionCard.style.display = "none";


//displayHighScore();
// highScoreCard.style.display = "block";


// =========================== END MAIN  ==========================
