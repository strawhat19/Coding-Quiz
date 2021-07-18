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

// Quiz Variables
var questions = [
    {
        question: 'Hi How Are You?',
        index: 'Question 1 out of 10',
        choices: ['Good','OK','Fantastic','Bad'],
        answer: 'Good'
    },
    {
        question: 'Hi How Are You Today?',
        index: 'Question 2 out of 10',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    {
        question: 'Hi How Are You Yesterday?',
        index: 'Question 3 out of 10',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    {
        question: 'Hi How Are You Today?',
        index: 'Question 4 out of 10',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    {
        question: 'Hi How Are You Today?',
        index: 'Question 4 out of 10',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    {
        question: 'Hi How Are You Today?',
        index: 'Question 5 out of 10',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    {
        question: 'Hi How Are You Today?',
        index: 'Question 6 out of 10',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    {
        question: 'Hi How Are You Today?',
        index: 'Question 7 out of 10',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    {
        question: 'Hi How Are You Today?',
        index: 'Question 8 out of 10',
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
}

    main.on('click', '.gameButton', function(event) {

        beginGame();
        $(event.target).parent().hide();

            questions.forEach(element => {
                var quizBox = $('<div class="contain question questionBox quizBox"><div class="questionTitle quizBoxTitle"><h1 class="spacer questionTitleText"></h1><div class=iconContainer id=itemContainer><div class="customIcon transition userPoints"title=Points>0</div><div class="customIcon transition iconTimer"title=Timer>60</div><div class="customIcon transition help"title=Help>?</div></div></div><div class=lineSep></div><h2 class="outOf questionIndex"></h2><p class="spacer questionP">Please choose one of the following answers!<ul class="answerChoices list-group"><li class="answer list-item">Variables<li class="answer list-item">Event Listeners<li class="answer list-item">DOM Maniplutaion<li class="answer list-item">Functions</ul></div>');

                for (var i = 0; i < questions.length; i++) {
                    var questionTitle = $('.questionTitleText');
                    var questionIndex = $('.questionIndex');
                    questionTitle.text(questions[i].question);
                    questionIndex.text(questions[i].index);
                }

                $(event.target).parent().parent().append(quizBox);

            });
    })

// Function Invokations