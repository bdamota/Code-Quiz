
// Variable Declarations 
var timerEl = document.getElementById("countdown")

 //The array of questions 
 var questions = [
    { q:'The sky is blue.', a: 't' },
    { q: 'Snow is cold.', a: 't' },
    { q: 'Water is dry.', a: 'f' }
];

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
generateBtn.addEventListener("click", startGame);
