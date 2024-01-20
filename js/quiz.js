let startButton;
let nextButton;
let questionContainerElement;

let shuffledQuestions, currentQuestionIndex;
let questionElement;
let answerButtonsElement;

window.addEventListener("load", function() {
    startButton = document.getElementById("start-btn");
    nextButton = document.getElementById("next-btn");
    questionElement = document.getElementById("question");
    answerButtonsElement = document.getElementById("answer-buttons");
    questionContainerElement = document.getElementById("question-container");
    
    startButton.addEventListener("click", startGame);
    nextButton.addEventListener("click", () => {
        currentQuestionIndex++
        setNextQuestion()
    })
    
});

function startGame(){
    startButton.classList.add("hide");
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5); // Create a copy and then sort
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn", "btn-lg", "btn-outline-dark")
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide")
    }else{
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
    

}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("bg-success")
    } else{
        element.classList.add("bg-danger")
    }

}

function clearStatusClass(element){
    element.classList.remove("bg-success")
    element.classList.remove("bg-danger")
    
}

const questions = [
    {
        question: "What is the capital of finland?",
        answers: [
            {text: "Helsinki", correct: true},
            {text: "Stockholm", correct: false}
        ]
    },
    {
        question: "What is the most used programming language?",
        answers: [
            {text: "Javascript", correct: true},
            {text: "Python", correct: false},
            {text: "SQL", correct: false},
            {text: "C#", correct: false},
        ]
    },
    {
        question: "How many minutes are in a full week?",
        answers: [
            {text: "10,080", correct: true},
            {text: "12,600", correct: false}
        ]
    },
    {
        question: "What is the highest-rated film on IMDb as of January 1st, 2024?",
        answers: [
            {text: "The shawshank redemption", correct: true},
            {text: "The godfather", correct: false}
        ]
    },
];