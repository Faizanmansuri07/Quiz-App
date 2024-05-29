const questions =[
    {
        question : "What is the capital of india ?",
        answers : [
            {text : "Mumbai" , correct : false},
            {text : "Kolkata" , correct : false},
            {text : " Chennai" , correct : false},
            {text : "Delhi" , correct : true}
        ]
    },

    {
        question : "Who is the corrent prime minister of india ?",
        answers : [
            {text : "Narendra Modi" , correct : true},
            {text : "Rahul Gandhi" , correct : false},
            {text : "Soniya Gandhi" , correct : false},
            {text : "Akhilesh Yadav" , correct : false}
        ]
    },
    {
        question : " Which famous monument in India was built by Emperor Shah Jahan?",
        answers : [
            {text : "Qutub Minar" , correct : false},
            {text : "Red Fort" , correct : false},
            {text : "Taj Mahal" , correct : true},
            {text : "Humayun’s Tomb" , correct : false}
        ]
    },
    {
         question : "What is the national flower of India?",
        answers : [
            {text : "Lotus" , correct : true},
            {text : "Rose" , correct : false},
            {text : "Sunflower" , correct :false },
            {text : "Jasmine" , correct : false}
        ]
    },{
        question : " Which festival is known as the “Festival of Lights” in India?  ",
        answers : [
            {text : "Holi" , correct : false},
            {text : "Navratri" , correct : false},
            {text : "Durga Puja" , correct : false},
            {text : "Diwali" , correct : true}
        ]
    } ,
    {
        question : "What is the currency of India?",
        answers : [
            {text : "Rupiah" , correct : false},
            {text : "Yen" , correct : false},
            {text : "Rupee" , correct : true},
            {text : "Euro" , correct : false}
        ]
    } ,{
        question : "Which Indian state is famous for its backwaters and houseboats?",
        answers : [
            {text : "Goa" , correct : false},
            {text : "Kerala" , correct : true},
            {text : "Rajasthan" , correct : false},
            {text : "Tamil Nadu" , correct : false}
        ]
    },
    {
        question : " The Indian film industry based in Mumbai is popularly known as what?",
        answers : [
            {text : "Bollywood" , correct : true},
            {text : "Hollywood" , correct : false},
            {text : "Tollywood" , correct : false},
            {text : "Nollywood" , correct : false}
        ]
    },
    {
        question : " Which Indian city is also known as the “Pink City”?",
        answers : [
            {text : "Jodhpur" , correct : false},
            {text : "Udaipur" , correct : false},
            {text : "Jaipur" , correct : true},
            {text : "Bikaner" , correct : false}
        ]
    },{
        question : "What is the national game of India?",
        answers : [
            {text : "Badminton" , correct : false},
            {text : "Cricket" , correct : false},
            {text : "Football" , correct : false},
            {text : "Field Hockey" , correct : true}
        ]
    }
];

const queationEl = document.getElementById("question");
const answerBtn =document.querySelector(".options");
const nextBtn = document.querySelector("#next");

let questionInd = 0;
let score =0;

function startQuiz() {
    questionInd = 0;
    score = 0;
    showquestions();
}

function showquestions() {
    resetState();
    let correntQuestion = questions[questionInd];
    let quiestionNo = questionInd + 1;
    queationEl.innerHTML = quiestionNo + ". " + correntQuestion.question;
 
    correntQuestion.answers.forEach((answer)=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}
function resetState() {
    nextBtn.style.display = "none";
    while(answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild)
    }
}
function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct ==="true";
    if(isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach((button)=>{
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display ="block";
}

function showScore() {
    resetState();
    queationEl.innerHTML =`You scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML ="Play Again";
    nextBtn.style.display ="block";
}

function handleNextButton() {
    questionInd++;
    if(questionInd  < questions.length) {
        showquestions();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click",()=>{
    if(questionInd < questions.length) {
        handleNextButton();
    } else{
        startQuiz();
    }
});