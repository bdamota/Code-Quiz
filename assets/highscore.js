var clearBtn = document.getElementById("clear");

// Clear High Scores
clearBtn.addEventListener("click", function() {
    localStorage.clear();
})


// Show Scores and Initials
function highScorePage () {

    var highScores = [];
    var highScores = [contactInfo, timeLeft];

    for (var i = 0; i < highScores.length; i++) {
      var highScores = highScores[i];

      var li = document.createElement("li");
      li.textContent = highScores;
      contactInfo.appendChild(li);
      timeLeft.appendChild(li);
    }
};
