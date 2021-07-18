// Welcome to the Coding Quiz!
console.log('Coding Quiz!');

// Declaring Variables
var showScoresLink = $('#showScoresLink');
var topTimer = $('.timeLeft');
var main = $('main');
var card = main.children();
var cardTitle = main.children().children().eq(0);
var cardSubheading = main.children().children().eq(2);
var cardParagraph = main.children().children().eq(3);
var totalQuestions = $('.totalQuestions');
var cardList = main.children().children().eq(4);
var gameButton = $('.gameButton');

var quizBox = $('<div class="contain question quizBox"><div class="questionTitle quizBoxTitle"><h1 class="spacer questionTitleText"></h1><div class=iconContainer id=itemContainer><div class="customIcon transition userPoints"title=Points>0</div><div class="customIcon transition iconTimer"title=Timer>60</div><div class="customIcon transition help"title=Help>?</div></div></div><div class=lineSep></div><h2 class="outOf questionIndex"></h2><p class="spacer questionP">Please choose one of the following answers!<ul class="answerChoices list-group"><li class="answer list-item">Variables<li class="answer list-item">Event Listeners<li class="answer list-item">DOM Maniplutaion<li class="answer list-item">Functions</ul></div>');

// Quiz Variables
var questions = [
    question1 = {
        question: 'Hi How Are You?',
        choices: ['Good','OK','Fantastic','Bad'],
        answer: 'Good'
    },
    question2 = {
        question: 'Hi How Are You Today?',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    question3 = {
        question: 'Hi How Are You Today?',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    question4 = {
        question: 'Hi How Are You Today?',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    question5 = {
        question: 'Hi How Are You Today?',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    question6 = {
        question: 'Hi How Are You Today?',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    question7 = {
        question: 'Hi How Are You Today?',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    question2 = {
        question: 'Hi How Are You Today?',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    question8 = {
        question: 'Hi How Are You Today?',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    question9 = {
        question: 'Hi How Are You Today?',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    }
];

// Functions
function beginGame() {
    console.log(cardTitle);
    console.log(cardSubheading);
    console.log(cardParagraph);
    console.log(cardList);
    console.log(gameButton);
    $(event.target).parent().hide();
    console.log(gameButton);
}

    main.on('click', '.gameButton', function(event) {
        beginGame();
        for (var i = 0; i < questions.length; i++) {
            $(event.target).parent().parent().append(quizBox);
        }
        // $(event.target).parent().children()
    })

// Function Invokations