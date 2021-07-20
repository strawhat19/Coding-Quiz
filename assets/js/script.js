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
        question: 'Which of these is NOT a Valid Javascript/JS data type?',
        index: 'Question 1 out of 10',
        choices: ['Null','Object','Symbol','Signal'],
        answer: 'Signal'
    },
    {
        question: 'Is JavaScript/JS a case-sensitive language?',
        index: 'Question 2 out of 10',
        choices: ['Yes','Not Anymore','Only for Identifiers','No'],
        answer: 'Yes'
    },
    {
        question: 'Which of these is NOT a valid way to store data in JS?',
        index: 'Question 3 out of 10',
        choices: ['Local Storage','Public Storage','Session Storage','Variables'],
        answer: 'Public Storage'
    },
    {
        question: 'Which of these is a valid way to declare a function?',
        index: 'Question 4 out of 10',
        choices: ['function =','= function','f(x)','=>'],
        answer: '=>'
    },
    {
        question: 'What does the "O" in DOM and JSON stand for?',
        index: 'Question 5 out of 10',
        choices: ['Order','Orientation','Object','Overage'],
        answer: 'Object'
    },
    {
        question: 'How would one put Single Line comments in their JS code?',
        index: 'Question 6 out of 10',
        choices: ['// Comment','<!-- Comment -->','/* Comment */','(Comment)'],
        answer: '// Comment'
    },
    {
        question: 'Which of these is NOT a valid Event for the Event Listener?',
        index: 'Question 7 out of 10',
        choices: ['Scroll','Click','Hover','Mouseover'],
        answer: 'Hover'
    },
    {
        question: 'Which of these is known as the Global Object?',
        index: 'Question 8 out of 10',
        choices: ['Document','Main','Body','Window'],
        answer: 'Window'
    },
    {
        question: 'How would one store elements for each instance in an Array?',
        index: 'Question 9 out of 10',
        choices: ['querySelector','getElementByID','querySelectorAll','getElementsByClassName'],
        answer: 'querySelectorAll'
    },
    {
        question: 'Which keyword is used to refer back to the parent object?',
        index: 'Question 10 out of 10',
        choices: ['parent','isNaN','this','contains'],
        answer: 'this'
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
            var questionBox = $('<div class="contain question questionBox quizBox"><div class="questionTitle quizBoxTitle"><h1 class="spacer questionTitleText"></h1><div class=iconContainer id=itemContainer><div class="customIcon transition userPoints"title=Points>0</div><div class="customIcon transition iconTimer"title=Timer>60</div><div class="customIcon transition help"title=Help>?</div></div></div><div class=lineSep></div><ul class="answerChoices list-group"></ul><h2 class="outOf questionIndex"></h2></div>');
            $(event.target).parent().parent().append(questionBox);
        })

        for (var i = 0; i < questions.length; i++) {
            var questionTitles = $('.questionTitleText');
            var questionIndexes = $('.questionIndex');
            questionTitles[i].textContent = questions[i].question;
            questionIndexes[i].textContent = questions[i].index;
            questions[i].choices.forEach(choices => {
                var answerChoices = $('.answerChoices');
                // Had to use Vanilla Javascript here
                // jQuery wasnt working
                var answerButton = document.createElement('li');
                answerButton.classList.add('answer');
                answerButton.classList.add('list-item');
                answerButton.setAttribute('data-value',choices)
                for (var j = 0; j < questions[i].choices.length; j++) {
                    answerButton.textContent = choices;
                    answerChoices[i].append(answerButton);
                    console.log(answerChoices[i]);
                }
                
            })
        }
    })

// Function Invokations