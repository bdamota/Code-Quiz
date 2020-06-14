
// Variable Declarations 
var timerEl = document.getElementById("countdown");
var startEl = document.getElementById("start");
var quizEl = document.getElementById("quiz");
var question = document.getElementById("question");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4 = document.getElementById("4");

// Timer Function 
function prepareGame() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        timerEl.textContent = "Time:" + timeLeft + "s";
        timeLeft--;

        if (timeLeft === 0) {
           timerEl.textContent = "";
           clearInterval(timeInterval);
           output();
        }

    }, 1000);
}

prepareGame();

 

// Listener Event to write password on click of "Start Quiz" button
//startBtn.addEventListener("click", startGame);