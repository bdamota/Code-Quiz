// Variable Declarations 
var mainEl = document.getElementById("main")
var timerEl = document.getElementById("countdown");
var quizEl = document.getElementById("quiz");
var questionEl = document.getElementById("question");
var choice1El = document.getElementById("1");
var choice2El = document.getElementById("2");
var choice3El = document.getElementById("3");
var choice4El = document.getElementById("4");
var resultEl = document.getElementById("result");
var endEl = document.getElementById("end");
var outputEl = document.getElementById("output")

var timeLeft = 5;

// Timer Function 
function counterReader() {
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
    { question: "Arrays in JavaScript can be used to store ________.", 
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

function startQuiz() {
    startEl.style.dispay = "none";
    mainEl.style.display = "none";
    renderQuestion();
    quizEl.style.display = "block";
    counterReader();
};
//Variable for Start Quiz Button
var startEl = document.getElementById("start-quiz");

// Listener Event to write password on click of "Start Quiz" button
startEl.addEventListener("click", startQuiz);

// Check Answers
function checkAnswer(answer) {
    if(questions[runningQuestionIndex].correct == answer) {
        outputEl.innerHTML = "Correct!"
    }
    else {
       outputEl.innerHTML = "Wrong!"
       timeLeft -=10;
    }
    if(runningQuestionIndex < lastQuestionIndex) {
        runningQuestionIndex++;
        renderQuestion();
    }
    else {
        resultRender();
    }
}; 

//Score Quiz
function resultRender() {
    end.style.display = "block";
    end.innerHTML = "All done!"
    quiz.style.display = "none"
    result.style.display = "block";

    resultEl = timeLeft
    result.innerHTML = ("Your final score is " + timeLeft + "."); 
    captureInput();
};

function captureInput() {
    initials.style.display = "block";  
    //capture and save info to local 
    //link high scores to lin
};

//add buttons for go back and clear high scores & css



