//Quiz questions and answers// 

var questions = [{
    numb: 1,
    question: "What does CSS stand for?",
    options: ["Cheers Stylish Sailor", "Cascading Style Sheets", "Cascading Steering Style", "Check Script Style"],
    answer: "Cascading Style Sheets"
},

{
    numb: 2,
    question: "What does HTML stand for?",
    options: ["HyperText Markdown Language", "Happy Toes Make Lunch", "HyperText Markup Language", "High Text Machine Language"],
    answer: "HyperText Markup Language"
},

{
    numb: 3,
    question: "Who does number two work for?",
    options: ["Scuba Steve", "Betty White", "Voldemort", "Dr. Evil"],
    answer: "Dr. Evil"
},

{
    numb: 4,
    question: "what does console.log() do?",
    options: ["it is a function that writes a message to the console not the browser screen", "displays message on the browser", "saves data to the local drive", "it's like a captains log from Star Trek"],
    answer: "it is a function that writes a message to the console not the browser screen"
},

{
    numb: 5,
    question: "what do you do if you dont know the answer?",
    options: ["cry", "give up", "ask someone who might know", "google"],
    answer: "google",
}]


//Global Variables and Elements//
var startQuiz = document.querySelector(".start-Btn");
var quizBox = document.querySelector(".quizBox");
var optionList = document.querySelector(".optionList");
var timeCount = quizBox.querySelector(".timer .timerSeconds");
var resultBox = document.querySelector(".results a")


let timeClock = 20;
let que_count = 0;
let que_numb = 1;
let counter;
let timeValue = 20;
let score = 0;


//If start quiz button clicked ---> clear container ---> start quiz ---> start questioncounter ---> start timer
startQuiz.addEventListener("click", function () {
    quizBox.classList.add("activeInfo");
    showQuestions(0);
    questionCounter(1)
    questionCounter(que_numb)
    startTimer(20);
})


//timer start//
function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        //stop timer at end//
        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "00";
        }
    }
}


//get questions and options from array//
function showQuestions(index) {
    const questionText = document.querySelector(".questionText");
    const optionList = document.querySelector(".optionList");
    //pull question//
    let questionSpan = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    //pull options//
    let optionSpan = '<div class= "option">' + questions[index].options[0] + '<span></span></div>'
        + '<div class= "option">' + questions[index].options[1] + '<span></span></div>'
        + '<div class= "option">' + questions[index].options[2] + '<span></span></div>'
        + '<div class= "option">' + questions[index].options[3] + '<span></span></div>';
    questionText.innerHTML = questionSpan;
    optionList.innerHTML = optionSpan;

    const option = optionList.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', "optionSelected(this)");
    }
};

//user option selection//
function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[que_count].answer;
    if (userAnswer == correctAnswer) {
    } else {


        //Remove 3 seconds from time for every WRONG!//
        console.log('WRONG!')


    }
};


//move on to the next question//
var nextQuestion = document.querySelector(".optionList");

nextQuestion.addEventListener("click", function () {
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        questionCounter(que_numb);
    }
});


//question counter//
function questionCounter(index) {
    const questionCount = document.querySelector(".totalQuestions");
    let totalQuestionsSpan = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    questionCount.innerHTML = totalQuestionsSpan;
}


//open results page once completed//
function showResultPage() {
    if (console.log('test completed')) {

        //log "time/score" to High Scores page//

        //Automatically open High Scores HTML//

    }
}
