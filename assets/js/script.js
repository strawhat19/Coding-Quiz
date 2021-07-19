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
        question: 'Question One?',
        index: 'Question 1 out of 10',
        choices: ['Good','OK','Fantastic','Bad'],
        answer: 'Good'
    },
    {
        question: 'Question Two?',
        index: 'Question 2 out of 10',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    {
        question: 'Question Three?',
        index: 'Question 3 out of 10',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    {
        question: 'Question Four?',
        index: 'Question 4 out of 10',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    {
        question: 'Question Five?',
        index: 'Question 5 out of 10',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    {
        question: 'Question Six?',
        index: 'Question 6 out of 10',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    {
        question: 'Question Seven?',
        index: 'Question 7 out of 10',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    {
        question: 'Question Eight?',
        index: 'Question 8 out of 10',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    {
        question: 'Question Nine?',
        index: 'Question 9 out of 10',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    },
    {
        question: 'Question Ten?',
        index: 'Question 10 out of 10',
        choices: ['Nope','EH','Hanging On','Dying'],
        answer: 'Dying'
    }
];

// Functions
function beginGame() {
    console.log(topTimer);
    console.log(gameButton);
}

    main.on('click', '.gameButton', function(event) {

        beginGame();
        $(event.target).parent().hide();

            questions.forEach(element => {

                // var questionBox = $('<div class="contain question questionBox quizBox"><div class="questionTitle quizBoxTitle"><h1 class="spacer questionTitleText"></h1><div class=iconContainer id=itemContainer><div class="customIcon transition userPoints"title=Points>0</div><div class="customIcon transition iconTimer"title=Timer>60</div><div class="customIcon transition help"title=Help>?</div></div></div><div class=lineSep></div><h2 class="outOf questionIndex"></h2><p class="spacer questionP">Please choose one of the following answers!<ul class="answerChoices list-group"><li class="answer list-item"></li><li class="answer list-item"></li><li class="answer list-item"></li><li class="answer list-item"></li></ul></div>');

                var questionBox = $('<div class="contain question questionBox quizBox"><div class="questionTitle quizBoxTitle"><h1 class="spacer questionTitleText"></h1><div class=iconContainer id=itemContainer><div class="customIcon transition userPoints"title=Points>0</div><div class="customIcon transition iconTimer"title=Timer>60</div><div class="customIcon transition help"title=Help>?</div></div></div><div class=lineSep></div><h2 class="outOf questionIndex"></h2><p class="spacer questionP">Please choose one of the following answers!<ul class="answerChoices list-group"></ul></div>');

                $(event.target).parent().parent().append(questionBox);

            })

            for (var i = 0; i < questions.length; i++) {
                var questionTitles = $('.questionTitleText');
                var questionIndexes = $('.questionIndex');
                questionTitles[i].textContent = questions[i].question;
                questionIndexes[i].textContent = questions[i].index;

                questions[i].choices.forEach(choice => {
                    var answerChoices = $('.answerChoices');
                    var answerButton = $('<li></li>');
                    answerButton.innerText = questions[i].choices;
                    answerButton.addClass('answer');
                    answerButton.addClass('list-item');
                    console.log(answerButton);
                    answerChoices[i].append(answerButton);
                })
            }


    })

// Function Invokations