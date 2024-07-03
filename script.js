const quiz = {
    questions: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "Home Tool Markup Language",
                "Hyperlinks and Text Markup Language",
                "Hyper Text Transfer Language"
            ],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "Which HTML element is used to define the title of a document?",
            options: [
                "<meta>",
                "<title>",
                "<header>",
                "<head>"
            ],
            answer: "<title>"
        },
        {
            question: "What is the correct HTML element for inserting a line break?",
            options: [
                "<break>",
                "<br>",
                "<lb>",
                "<hr>"
            ],
            answer: "<br>"
        },
        {
            question: "Which HTML attribute is used to define inline styles?",
            options: [
                "class",
                "font",
                "styles",
                "style"
            ],
            answer: "style"
        },
        {
            question: "How can you make a numbered list in HTML?",
            options: [
                "<ol>",
                "<ul>",
                "<li>",
                "<list>"
            ],
            answer: "<ol>"
        },
        {
            question: "What does CSS stand for?",
            options: [
                "Colorful Style Sheets",
                "Creative Style Sheets",
                "Cascading Style Sheets",
                "Computer Style Sheets"
            ],
            answer: "Cascading Style Sheets"
        },
        {
            question: "Which property is used to change the background color?",
            options: [
                "color",
                "bgcolor",
                "background-color",
                "background"
            ],
            answer: "background-color"
        },
        {
            question: "How do you select an element with id 'demo' in CSS?",
            options: [
                ".demo",
                "demo",
                "#demo",
                "*demo"
            ],
            answer: "#demo"
        },
        {
            question: "Which property is used to change the text color of an element?",
            options: [
                "fgcolor",
                "text-color",
                "color",
                "font-color"
            ],
            answer: "color"
        },
        {
            question: "Which CSS property controls the text size?",
            options: [
                "font-style",
                "text-style",
                "font-size",
                "text-size"
            ],
            answer: "font-size"
        }
    ]
};

let currentQuestionIndex = 0;
var points = 0;
var yourPoint;
var getyourPoint;
let arrofopt;
let ans;
let choice;
let opt1;
let opt2;
let opt3;
let opt4;
let isAnswered = false;
let timerInterval;  // Variable to hold the timer interval
let timeLeft = 30;  // Initial time for each question

function showQuestion(index) {
    clearInterval(timerInterval); // Clear any existing timer interval
    if (arrofopt) {
        arrofopt.forEach(option => {
            option.classList.remove('right', 'wrong');
            option.lastElementChild.classList.remove('rightans', 'wrongans');
        });
    }
    const qn = document.querySelector('.qnumber');
    qn.firstElementChild.textContent = `${index + 1}/10`;

    const questionElement = document.querySelector('.question2 span');
    questionElement.textContent = quiz.questions[index].question;

    opt1 = document.getElementById('option1');
    opt2 = document.getElementById('option2');
    opt3 = document.getElementById('option3');
    opt4 = document.getElementById('option4');

    const options = quiz.questions[index].options;
    opt1.firstElementChild.textContent = options[0];
    opt2.firstElementChild.textContent = options[1];
    opt3.firstElementChild.textContent = options[2];
    opt4.firstElementChild.textContent = options[3];

    arrofopt = [opt1, opt2, opt3, opt4];
    ans = quiz.questions[index].answer;
    choice = document.querySelector('.selectans2');
    isAnswered = false;

    // Start the timer for this question
    startTimer();
}

function startTimer() {
    const timerSpan = document.querySelector('.timerSpan');
    timeLeft = 30;
    timerSpan.textContent = formatTime(timeLeft);

    timerInterval = setInterval(() => {
        timeLeft--;
        timerSpan.textContent = formatTime(timeLeft);

        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeOut();
        }
        else if(timeLeft <= 5){
            document.getElementById('questions').style.backgroundColor = '#DBADAD';
            document.getElementById('timerSpan').style.backgroundColor = '#C50C00';
            console.log(document.getElementById("container"))
        }
        else if (timeLeft <= 15) {
            document.getElementById('questions').style.backgroundColor = 'rgb(228, 229, 199)';
            document.getElementById('timerSpan').style.backgroundColor = '#C5B100';
            console.log(document.getElementById("container"))
        }
    }, 1000);
}

function handleTimeOut() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        alert('You have completed the quiz!');
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

document.getElementById('nextButton').addEventListener('click', () => {
    clearInterval(timerInterval);
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        alert('You have completed the quiz!');
        document.getElementById('questions').style.visibility = 'hidden';
        document.getElementById('nextButton').style.visibility = 'hidden';
    }
});

// Initialize the first question and start the timer
showQuestion(currentQuestionIndex);

choice.addEventListener('click', (event) => {
    if (isAnswered) return; 

    if (event.target.textContent == ans) {
        console.log(event.target.textContent)
        event.target.parentElement.classList.add('right')
        event.target.parentElement.lastElementChild.classList.add('rightans')
        points++;
        localStorage.setItem('yourPoint', points);
        getyourPoint = localStorage.getItem('yourPoint');
        console.log(getyourPoint)
    }
    else {
        event.target.parentElement.classList.add('wrong')
        event.target.parentElement.lastElementChild.classList.add('wrongans')
        arrofopt.forEach((e) => {
            if (e.firstElementChild.textContent == ans) {
                e.classList.add('right');
                console.log(e)
                document.querySelector('.right').lastElementChild.classList.add('rightans')
            }
        })
    }

    isAnswered = true; 
    console.log(`your choice:${event.target.textContent}`);
    console.log(`answer:${ans}`);

})

