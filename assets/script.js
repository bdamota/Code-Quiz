// Variable Declarations 
var mainEl = document.getElementById("main")
var timerEl = document.getElementById("countdown");
var quizEl = document.getElementById("quiz");
var questionEl = document.getElementById("question");
var choice1El = document.getElementById("1");
var choice2El = document.getElementById("2");
var choice3El = document.getElementById("3");
var choice4El = document.getElementById("4");
var scoreEl = document.getElementById("score")

// Timer Function 
function counterReader() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        timerEl.textContent = "Time:" + timeLeft + "s";
        timeLeft--;

        if (timeLeft === 0) {
           timerEl.textContent = "Time:0s";
           clearInterval(timeInterval);
        }
    
    }, 1000);
};

//The array of questions 
var questions = [
    { question: 'Commonly used data types DO NOT include:', 
    choice1 : "1. strings",
    choice2 : "2. booleans",
    choice3 : "3. alerts",
    choice4 : "4. numbers",
    correct: "3"
    },
    { question: "Arrays in JacaScript can be used to store ________.", 
    choice1 : "1. numbers and strings",
    choice2 : "2. other arrays",
    choice3 : "3. booleans",
    choice4 : "4. all of the above",
    correct: "4"
    },
    { question: "The condition in an if / else statement is enclosed with ________.", 
    choice1 : "1. quotes",
    choice2 : "2. curly brackets",
    choice3 : "3. parenthesis",
    choice4 : "4. square brackets",
    correct: "2"
    },
    { question: "String values must be enclosed within ______ when being assigned to variables.", 
    choice1 : "1. commas",
    choice2 : "2. curly brackets",
    choice3 : "3. quotes",
    choice4 : "4. parenthesis",
    correct: "3"
    },
    { question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
    choice1 : "1. JavaScript",
    choice2 : "2. terminal/bash",
    choice3 : "3. for loops",
    choice4 : "4. console.log",
    correct: "4"
    },
];  
// Display Questions 
var lastQuestionIndex= questions.length -1;
var runningQuestionIndex = 0;    

function renderQuestion() {
    var q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    choice1El.innerHTML = q.choice1;
    choice2El.innerHTML = q.choice2;
    choice3El.innerHTML = q.choice3;
    choice4El.innerHTML = q.choice4;
};

// Check Answers
function checkAnswer(answer) {
    if(questions[runningQuestionIndex].correct == answer) {
        return("Correct!")
    }
    else {
        timerEl -10;
    }
    if(runningQuestionIndex < lastQuestionIndex) {
        runningQuestionIndex++;
        renderQuestion();
    }
    else {
        clearInterval(???)
        scoreRender();
    }
}; 

function scoreRender() {
    score.style.display = "block";
    var scoreTotal = ???;
    score.innerHTML = "<p>" + scoreTotal + "</p>"
};

function startQuiz() {
    startEl.style.dispay = "none";
    mainEl.style.display = "none";
    renderQuestion();
    quiz.style.display = "block"
    counterReader();
};

//Variable for Start Quiz Button
var startEl = document.getElementById("start-quiz");

// Listener Event to write password on click of "Start Quiz" button
startEl.addEventListener("click", startQuiz);
