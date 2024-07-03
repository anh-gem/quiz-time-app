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
var arrofopt;
var ans;
var choice;
var opt1;
var opt2;
var opt3;
var opt4;
var isAnswered = false;

function showQuestion(index) {
    if (arrofopt) {
        arrofopt.forEach(option => {
            option.classList.remove('right', 'wrong');
            option.lastElementChild.classList.remove('rightans', 'wrongans');
        });
    }
    const qn = document.querySelector('.qnumber');
    const i = index + 1;
    qn.firstElementChild.textContent = `${i}/10`
    const questionElement = document.querySelector('.question2 span');
    questionElement.textContent = quiz.questions[index].question;
    opt1 = document.getElementById('option1');
    opt2 = document.getElementById('option2');
    opt3 = document.getElementById('option3');
    opt4 = document.getElementById('option4');
    opt1.firstElementChild.textContent = quiz.questions[index].options[0]
    opt2.firstElementChild.textContent = quiz.questions[index].options[1]
    opt3.firstElementChild.textContent = quiz.questions[index].options[2]
    opt4.firstElementChild.textContent = quiz.questions[index].options[3]
    arrofopt = [opt1, opt2, opt3, opt4]
    ans = quiz.questions[index].answer
    choice = document.querySelector('.selectans2')
    isAnswered = false; 
}

document.getElementById('nextButton').addEventListener('click', () => {
    console.log(currentQuestionIndex)
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        alert('You have completed the quiz!');
    }
});

// Initialize the first question
showQuestion(currentQuestionIndex);

choice.addEventListener('click', (event) => {
    if (isAnswered) return; 

    if (event.target.textContent == ans) {
        console.log(event.target.textContent)
        event.target.parentElement.classList.add('right')
        event.target.parentElement.lastElementChild.classList.add('rightans')
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