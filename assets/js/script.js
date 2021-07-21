// Welcome to the Coding Quiz!
console.log('Coding Quiz!');

// Declaring Variables
var showScoresLink = $('#showScoresLink');
var topTimer = $('.timeLeft');
var countDownTimer = 60;
var main = $('main');
var totalQuestions = $('.totalQuestions');
var gameButton = $('.gameButton');
var userPoints = 0;

// Quiz Variables
var questions = [
    {
        question: 'Which of these is NOT a Valid Javascript/JS data type?',
        index: 'Question 1 out of 10',
        choices: ['Null','Undefined','Symbol','Signal'],
        answer: 'Signal',
        incorrect: ['Null','Undefined','Symbol']
    },
    {
        question: 'Is JavaScript/JS a case-sensitive language?',
        index: 'Question 2 out of 10',
        choices: ['Yes','Not Anymore','Only for Identifiers','No'],
        answer: 'Yes',
        incorrect: ['Not Anymore','Only for Identifiers','No']
    },
    {
        question: 'Which of these is NOT a valid way to store data in JS?',
        index: 'Question 3 out of 10',
        choices: ['Local Storage','Public Storage','Session Storage','Variables'],
        answer: 'Public Storage',
        incorrect: ['Local Storage','Session Storage','Variables']
    },
    {
        question: 'Which of these is a valid way to declare a function?',
        index: 'Question 4 out of 10',
        choices: ['func =>','= function','f(x)','=>'],
        answer: '=>',
        incorrect: ['func =>','= function','f(x)']
    },
    {
        question: 'What does the "O" in DOM and JSON stand for?',
        index: 'Question 5 out of 10',
        choices: ['Order','Orientation','Object','Overage'],
        answer: 'Object',
        incorrect: ['Overage','Order','Orientation',]
    },
    {
        question: 'How would one put Single Line comments in their JS code?',
        index: 'Question 6 out of 10',
        choices: ['// Comment','<!-- Comment -->','/* Comment */','(Comment)'],
        answer: '// Comment',
        incorrect: ['<!-- Comment -->','/* Comment */','(Comment)']
    },
    {
        question: 'Which of these is NOT a valid Event for the Event Listener?',
        index: 'Question 7 out of 10',
        choices: ['Scroll','Click','Hover','Mouseover'],
        answer: 'Hover',
        incorrect: ['Scroll','Click','Mouseover']
    },
    {
        question: 'Which of these is known as the Global Object?',
        index: 'Question 8 out of 10',
        choices: ['Document','Main','Body','Window'],
        answer: 'Window',
        incorrect: ['Document','Main','Body']
    },
    {
        question: 'How would one store elements for each instance in an Array?',
        index: 'Question 9 out of 10',
        choices: ['querySelector','getElementByID','querySelectorAll','getElementsByClassName'],
        answer: 'querySelectorAll',
        incorrect: ['querySelector','getElementByID','getElementsByClassName']
    },
    {
        question: 'Which keyword is used to refer back to the parent object?',
        index: 'Question 10 out of 10',
        choices: ['parent','isNaN','this','contains'],
        answer: 'this',
        incorrect: ['parent','isNaN','contains']
    }
];

// Functions
function beginGame() {

    // Count Down Timer Start
    var countDown = setInterval(function() {
        if (countDownTimer > 0) {
            countDownTimer--;
        } else {
            // Count Down Timer Stop
            clearInterval(countDown);
            var questionBox = $('.questionBox');
            questionBox.html('<h1 class="gameoverText" style="text-align: center; padding: 1em 0; border-bottom: 1px solid var(--neutral);">GAME OVER</h1><h1 class="gameoverText" style="text-align: center; padding: 1em 0;">YOU LOSE</h1>');
        }
        topTimer.html('<i class="fas fa-stopwatch"></i> | ' + countDownTimer + ' S');
        var checkEnd = setInterval(function() {
            if ($('.endScreen').css('display') === 'block') {
                // Count Down Timer Stop
                clearInterval(checkEnd);
                clearInterval(countDown);
            }
        }, 100)
    }, 1000);

}

    main.on('click', '.gameButton', function(event) {

        beginGame();
        $(event.target).parent().hide();

        // Creating a div for each question in our array
        questions.forEach(element => {
            var questionBox = $('<div class="contain question questionBox quizBox"><div class="questionTitle quizBoxTitle"><h1 class="spacer questionTitleText"></h1><div class=iconContainer id=itemContainer>Total Points: <div class="customIcon transition userPoints"title=Points>0</div></div></div><div class=lineSep></div><ul class="answerChoices list-group"></ul><h2 class="outOf questionIndex"></h2></div>');
            $(event.target).parent().parent().append(questionBox);
            var questionBox = $('.questionBox');
            questionBox.attr('id', 'questionBox');
        })

        // Game Over Screen
        var endScreen = $('<div class="endScreen contain question questionBox quizBox hide"><div class="questionTitle quizBoxTitle"><h1 class="spacer questionTitleText">Total Points:</h1><div class=iconContainer id=itemContainer><div class="customIcon transition userPoints"title=Points>0</div></div></div><div class=lineSep></div><h2 class="outOf questionIndex">Congratulations on Finishing the Quiz!</h2><h2 class="outOf questionIndex">Click here to view the High Scores!</h2></div>');
        main.append(endScreen);

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
                }
                
                // Check Answers and Move to Next Question
                var correctAnswer = questions[i].answer;
                var incorrectAnswers = questions[i].incorrect[0];
                var incorrectAnswers2 = questions[i].incorrect[1];
                var incorrectAnswers3 = questions[i].incorrect[2];
                var questionBox = $('.questionBox');
                questionBox.on('click', '.answer', function(event) {

                    // Sets next question after user clicks
                    var nextQuestion = setInterval(function() {
                        $(event.target).parent().parent().next().removeClass('hide');
                        $(event.target).parent().parent().hide();
                        clearInterval(nextQuestion);
                    }, 300);

                    if ($(event.target).data('value') === correctAnswer) {

                        // Change Button color to Green if Correct
                        $(event.target).addClass('correct');

                        // Add 1 Point
                        var userPointsElement = $('.userPoints');
                        if (userPoints >= 0 && userPoints < questions.length) {
                            userPoints = userPoints + 1/4;
                            userPointsElement.text(userPoints);
                        } else {
                            userPointsElement.text(0);
                        }
                        userPointsElement.text(userPoints);
                        localStorage.setItem('Points', userPoints);
                    }
                    // Change Button Color to Correct
                    else if($(event.target).data('value') === incorrectAnswers || $(event.target).data('value') === incorrectAnswers2 || $(event.target).data('value') === incorrectAnswers3) {

                         // Change Button color to Green if Correct
                        $(event.target).addClass('wrong');
                    }
                })
            })
            // Hide other boxes
            if (i < questions.length-1) {
                var newi = i + 1;
                questionBox[newi].classList.toggle('hide');
            } 
        }
    })
// Function Invokations
