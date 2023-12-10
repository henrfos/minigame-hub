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
        question: "What is 2 + 2?",
        answers: [
            {text: "4", correct: true},
            {text: "22", correct: false}
        ]
    },
    {
        question: "What is 2 + 3?",
        answers: [
            {text: "5", correct: true},
            {text: "22", correct: false},
            {text: "8", correct: false},
            {text: "32", correct: false},
        ]
    },
    {
        question: "What is 2 + 5?",
        answers: [
            {text: "7", correct: true},
            {text: "22", correct: false}
        ]
    },
    {
        question: "What is 2 + 10?",
        answers: [
            {text: "12", correct: true},
            {text: "22", correct: false}
        ]
    },
];