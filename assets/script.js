// Timer Function 
function counterReader() {
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
};

// Listener Event to write password on click of "Start Quiz" button
startEl.addEventListener("click", startQuiz);

