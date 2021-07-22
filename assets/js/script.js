// Welcome to the Coding Quiz!
console.log('Coding Quiz!');

// Declaring Variables
var showScoresLink = $('#showScoresLink');
var topTimer = $('.timeLeft');
var countDownTimer = 15;
var main = $('main');
var totalQuestions = $('.totalQuestions');
var gameButton = $('.gameButton');
var userPoints = 0;
var maxHighScores = 5;
var showScoresElement = $('#scoresHover');

// High Scores
var highScores = JSON.parse(localStorage.getItem('High Scores')) || [];
// Hide High Scores if array is empty
if (highScores.length === 0) showScoresElement.hide();
highScores.map(score => {
    var highScoreItems = $('<div class="statistic">');
    var blueSlashes = $('<span style="color: var(--neutral);"> // </span>');
    var blueSlashes2 = $('<span style="color: var(--neutral);"> // </span>');
    var scoreName = score.name;
    var scoreNameElement = $('<div class="scoreName">');
    scoreNameElement.append(scoreName);
    var scoreScore = score.score;
    var scoreScoreElement = $('<div class="scoreScore">');
    scoreScoreElement.append(scoreScore + ' points');
    var scoreTimeLeft = score.timeLeft;
    var scoreTimeLeftElement = $('<div class="scoreTimeLeft">');
    scoreTimeLeftElement.append(scoreTimeLeft + ' left');

    highScoreItems.append(scoreNameElement);
    highScoreItems.append(blueSlashes);
    highScoreItems.append(scoreScoreElement);
    highScoreItems.append(blueSlashes2);
    highScoreItems.append(scoreTimeLeftElement);
   showScoresElement.append(highScoreItems);
   showScoresLink.on('click', function(event) {
       var quizBox = $('.quizBox');
    //    quizBox.after(highScoreItems);
       showScoresElement.append(highScoreItems);
   })
})

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
        // As Long As Time Is Above 0 Seconds
        if (countDownTimer > 0) {
            countDownTimer--;
        } else {
            // Count Down Timer Stop
            clearInterval(countDown);
            var questionBox = $('.questionBox');
            questionBox.addClass('timeOut');
            // Time Ran Out Screen

            //             //             //      GAME END FUNCTIONS       //             //             //             //
            questionBox.html('<div class="questionTitle quizBoxTitle"><h1 class="spacer questionTitleText"><b>Time Is Up!</b></h1><div class="totalPointsElement"><div class="iconContainer outerIconContainer"><div class="iconContainer" id="itemContainer">Time Remaining: <div class="customIcon transition timeRemaining" title="Time">60</div></div><div class="iconContainer" id="itemContainer">Total Points: <div class="customIcon transition userPoints"title="Points">0</div></div></div></div></div><div class=lineSepEnd></div><div id="formEntry" class="stats"><div id="userStats"><div class="stats"><div id="userName">USER </div><div id="userPointsElement">Points: </div><div id="userTimeRemaining">Time Left: </div><div id="date">Today: </div></div><form id="entryForm"><input id="name" type="name" name="name" placeholder="Enter your Name"><button type="submit" id="submitButton">Submit Score</button></form></div></div>');
            $('.userPoints').html(userPoints * 10);
            var printName = main.children().children().find('#userName');
            var printPoints = main.children().children().find('#userPointsElement');
            var printTime = main.children().children().find('#userTimeRemaining');
            var printDate = main.children().children().find('#date');
            var updateTime = setInterval(function() {
                var date = moment().format('MMM DD, YYYY');
                var time = moment().format('hh:mm:ss a');
                printDate.html('Date: ' + date + ' at ' + time);
            }, 100)
            printPoints.text('Points: ' + userPoints * 10);
            printTime.text('Time Left: ' + countDownTimer);
            // Form Submit
            var scoreEntryForm = $('form');
            scoreEntryForm.on('submit', function(event) {
                event.preventDefault();
                clearInterval(updateTime);
                $(event.target).parent().parent().parent().addClass('endScreen');
                $(event.target).parent().parent().parent().siblings().remove();
                var userName = $(event.target).children().val();
                printName.html(userName);
                printName.attr('style','text-transform:uppercase');
                var appendName = $('<div>');
                var reinitializeMessage = $('<div class="reinitializeMessage">Reinitializing Page <div style="color: var(--neutral)" class="spinner-border" role="status"><span class="sr-only"> Loading...</span></div></div>');
                appendName.attr('id','goodJobMessage');
                appendName.text('Good Job, ' + userName);
                questionBox.append(appendName);
                questionBox.append(reinitializeMessage);
                // Storing Scores
                var userStat = {
                    name: userName,
                    score: localStorage.getItem('Current Points'),
                    timeLeft: localStorage.getItem('Current Time Remaining')
                }
                highScores.push(userStat);
                highScores.sort((a,b) => b.score - a.score);
                highScores.splice(maxHighScores);
                localStorage.setItem('High Scores', JSON.stringify(highScores));

                // Reload Game After Score is Stored
                setTimeout(function reloadGame() {
                    location.reload(true);
                }, 1500);
                })
        }

        // Make the timer print to the top timer element
        topTimer.html('<i class="fas fa-stopwatch"></i> | ' + countDownTimer + ' S');

        //             //             //      GAME END FUNCTIONS       //             //             //           //
        // Check if the End Screen is in the window
        var checkEnd = setInterval(function() {
        // Updated Statistics
        var updatedTimer = topTimer.text().split(' ')[2];
        var updatedPoints = $('.endScreen').find('.userPoints').html();
        var updatedIconTimer = main.find('.timeRemaining');
        updatedIconTimer.html(updatedTimer);
        localStorage.setItem('Current Time Remaining', updatedTimer + 's');
        localStorage.setItem('Current Points', updatedPoints);
            if ($('.endScreen').css('display') === 'block') {
                // Count Down Timer Stop
                console.log('Game Over!');
                $('.userPoints').html(userPoints * 10);
                // Updated Statistics
                var currentTimeRemaining = localStorage.getItem('Current Time Remaining');
                var currentUserPoints = localStorage.getItem('Current Points');
                var printPoints = main.children().children().find('#userPointsElement');
                var printTime = main.children().children().find('#userTimeRemaining');
                printPoints.text('Points: ' + currentUserPoints);
                printTime.html('Time Left: ' + currentTimeRemaining);
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
            var questionBox = $('<div class="contain question questionBox quizBox"><div class="questionTitle quizBoxTitle"><h1 class="spacer questionTitleText"></h1><div class="iconContainer outerIconContainerQuestions"><div class=iconContainer id=itemContainer>Time Remaining: <div class="customIcon transition timeRemaining" title="Time">60</div></div><div class="iconContainer" id="itemContainer">Total Points: <div class="customIcon transition userPoints"title=Points>0</div></div></div></div><div class=lineSep></div><ul class="answerChoices list-group"></ul><h2 class="outOf questionIndex"></h2></div>');
            $(event.target).parent().parent().append(questionBox);
            var questionBox = $('.questionBox');
            questionBox.attr('id', 'questionBox');
        })

        //             //             //      GAME END FUNCTIONS       //             //             //           //
        // Quiz Finished Screen
        var endScreen = $('<div class="endScreen contain question questionBox quizBox hide timeOut"><div class="questionTitle quizBoxTitle"><h1 class="spacer questionTitleText"><b>Quiz Completed!</b></h1><div class="totalPointsElement"><div class="outerIconContainer iconContainer"><div class=iconContainer id=itemContainer>Time Remaining: <div class="customIcon transition timeRemaining" title="Time">60</div></div><div class=iconContainer id=itemContainer>Total Points: <div class="customIcon transition userPoints"title="Points">0</div></div></div></div></div><div class=lineSepEnd></div><div id="formEntry" class="stats"><div id="userStats"><div class="stats"><div id="userName">USER </div><div id="userPointsElement">Points: </div><div id="userTimeRemaining">Time Left: </div><div id="date">Today: </div></div><form id="entryForm"><input id="name" type="name" name="name" placeholder="Enter your Name"><button type="submit" id="submitButton">Submit Score</button></form></div></div></div>');
        main.append(endScreen);
        var printName = main.children().children().find('#userName');
        var printDate = main.children().children().find('#date');
        var updateTime = setInterval(function() {
            var date = moment().format('MMM DD, YYYY');
            var time = moment().format('hh:mm:ss a');
            printDate.html('Date: ' + date + ' at ' + time);
        }, 100)
        // Form Submit
        var scoreEntryForm = $('form');
        scoreEntryForm.on('submit', function(event) {
            event.preventDefault();
            clearInterval(updateTime);
            $(event.target).parent().parent().parent().addClass('endScreen');
            $(event.target).parent().parent().parent().siblings().remove();
            var userName = $(event.target).children().val();
            printName.html(userName);
            printName.attr('style','text-transform:uppercase');
            var appendName = $('<div>');
            appendName.attr('id','goodJobMessage');
            appendName.text('Good Job, ' + userName);
            var reinitializeMessage = $('<div class="reinitializeMessage">Reinitializing Page <div style="color: var(--neutral)" class="spinner-border" role="status"><span class="sr-only"> Loading...</span></div></div>');
            endScreen.append(appendName);
            endScreen.append(reinitializeMessage);
            // Storing Scores
            var userStat = {
                name: userName,
                score: localStorage.getItem('Current Points'),
                timeLeft: localStorage.getItem('Current Time Remaining')
            }
            highScores.push(userStat);
            highScores.sort((a,b) => b.score - a.score);
            highScores.splice(maxHighScores);
            localStorage.setItem('High Scores', JSON.stringify(highScores));

            // Reload Game After Score is Stored
            setTimeout(function reloadGame() {
                location.reload(true);
            }, 1500);
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
                    }, 350);

                    if ($(event.target).data('value') === correctAnswer) {

                        // Change Button color to Green if Correct
                        $(event.target).addClass('correct');

                        // Add 1 Point
                        var userPointsElement = $('.userPoints');
                        if (userPoints >= 0 && userPoints < questions.length) {
                            // This is nested in a forEach loop
                            // So everytime i did userPoints++, it would add 1 four times, once for each answer choice
                            // Instead I did '+ 1/4'
                            userPoints = userPoints + 1/4;
                            userPointsElement.text(userPoints);
                        } // else {
                        //     userPointsElement.text(0);
                        // }
                        userPointsElement.text(userPoints);
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