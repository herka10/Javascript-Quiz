

//## Acceptance Criteria

// ```
// GIVEN I am taking a code quiz
// WHEN I click the start button
    // eventlistener
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```

// questions
var quizQuestions = [
    {
        question: "How do you create a function?",
        options: [
            "1. function = myFunction()", 
            "2. function myFunction()",
            "3. function = ()",
            "4. function:myFunction()"
        ],
        correctAnswer: "2. function myFunction()"
    },
    {
        question: "Which HTML element do we put the JavaScript in?",
        options: [
            "1. <script>", 
            "2. <javascript>", 
            "3. <js>", 
            "4. <scipting>"
        ],
        correctAnswer: "1. <script>"
    },
    {
        question: "Where is the correct place to insert a Javascript?",
        options: [
            "1. The <body> section", 
            "2. The <head> section", 
            "3. Both the <head> and <body> section are correct.",
            "4. Neither one of these are correct."
        ],
        correctAnswer: "3. Both the <head> and <body> section are correct.",
    },
    {
        question: "How do you write and IF statement in Javascript?",
        options: [
            "1. if (i===5) {}", 
            "2. if i = 5 {}",
            "3. if i = 5 {then}",
            "4. if i == 5 {then}"
        ],
        correctAnswer: "1. if (i===5) {}",
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        options: [
            "1. alert('Hello World');", 
            "2. alertBox('Hello World');", 
            "3. msg('Hello World');", 
            "4. msgBox('Hello World');"
        ],
        correctAnswer: "1. alert('Hello World');",
    }
]

// vars, elements
var timerEl = document.getElementById('timer');
var highScores = document.getElementById('highScores')
var questionEl = document.getElementById('questions')
var startBtn = document.getElementById('startBtn')
var homeScreen = document.getElementById('homeScreen')
var countDownId;
var timer = 60;
var questionIndex = 0;
var quizQuestionEl = document.getElementById('quizQuestion')
var quizOption0El = document.getElementById('option0')
var quizOption1El = document.getElementById('option1')
var quizOption2El = document.getElementById('option2')
var quizOption3El = document.getElementById('option3')
var answerMessage = document.getElementById('answerMessage')
var timeUpEl = document.getElementById('timeUp')
var questionsDoneEl = document.getElementById('questionsDone') 
var finalScoreEl = document.getElementById('finalScore')
var scoreCounterEl = document.getElementById('score')
var score = 0;
var addScoreEl = document.getElementById('addScoreBtn')
var listOfHighScoresEl = document.getElementById('listOfHighScores')
var initialsInputEl = document.getElementById('initials')
var initials 
var saveInitials = document.createElement('p')
var saveScore = document.createElement('p')
var backBtn = document.getElementById('backBtn')

// var countdownEl = document.getElementById('time')
// var time = quizQuestions.length * 15


startBtn.addEventListener("click", startQuiz)
backBtn.addEventListener("click", mainMenu)

// start questions function
function startQuiz() {
    // start button a link to another page || hide and unhide elements
    homeScreen.setAttribute("hidden", true);
    questionEl.removeAttribute("hidden")
    //timer
    timerEl.textContent = timer
    countDownId = setInterval(countdown, 1000);
    //show questions
    renderQuestions()
}

// countdown function (how do I display this??)
function countdown() {
    timer--;
    timerEl.textContent = timer
    if (timer < 1 || questionIndex >= quizQuestions.length) {
        clearInterval(countDownId)
        endQuiz();
    }
}

function renderQuestions() {
    //display the first questiosn

    quizQuestionEl.textContent = quizQuestions[questionIndex].question
    quizOption0El.textContent = quizQuestions[questionIndex].options[0]
    quizOption1El.textContent = quizQuestions[questionIndex].options[1]
    quizOption2El.textContent = quizQuestions[questionIndex].options[2]
    quizOption3El.textContent = quizQuestions[questionIndex].options[3]
   
    quizOption0El.addEventListener("click", checkAnswer)
    quizOption1El.addEventListener("click", checkAnswer)
    quizOption2El.addEventListener("click", checkAnswer)
    quizOption3El.addEventListener("click", checkAnswer)
    
    // quizEl.innerText = quizQuestions[0].question 
    // + " | " + quizQuestions[0].options

//    for (var i = 0; i < quizQuestions[0].options.length; i++) {
//        var li = document.createElement('li')
//        li.innerText = quizQuestions[0].options[i]
//    }

// display question and options
// add event listener to all option buttons 
    // all these should go to checkAnswer function
}

function checkAnswer(e) {
    var userChoice = e.target.textContent
    if (quizQuestions[questionIndex].correctAnswer === userChoice) {
        answerMessage.textContent = "Correct!"
        score++
    } else {
        answerMessage.textContent = "Incorrect!"
        // timer = timer -10
        timer -= 10;
    }
    // if else statement
    questionIndex++;
    if(questionIndex < quizQuestions.length) {
        renderQuestions()
    } else if (questionIndex > quizQuestions.length || timer <= 0) {
        endQuiz()
    }
    //     if correct, renderQuestions ++
    //     else -timer 10 sec and next question
    // increment question index
}

// end questions function 
function endQuiz() {
    questionEl.setAttribute("hidden", true);
    finalScoreEl.removeAttribute('hidden');
    scoreCounterEl.textContent = score
}

function submitInitials() {
    highScores.removeAttribute('hidden');
    initials = initialsInputEl.value 
    console.log(initials)
    saveInitials.textContent = initials
    saveScore.textContent = score
    listOfHighScoresEl.appendChild(saveInitials);
    listOfHighScoresEl.appendChild(saveScore);
}

addScoreEl.addEventListener("click", submitInitials)

function mainMenu() {
    highScores.setAttribute('hidden', true);
    homeScreen.removeAttribute('hidden');
    finalScoreEl.setAttribute('hidden', true)
    timerEl.textContent = ""
}

// renderQuestions(quizQuestions[0])
// function to retrieve questions (how do I retrieve then?? 
    //loop over the choices 
    //eventlistener to clicks of the options for right or wrong answers
// function that will update time 
    // once time is up, the end question function will run
// need to store scores
// show highscore function 
