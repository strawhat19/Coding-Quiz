// Dynamic Controller

// Welcome to the Coding Quiz!
console.log('Coding Quiz!');

// Game Variables
var userPoints = 0; // User Starting Points
var maxHighScores = 5; // Max High Scores to Store
// Creating Dynamic Time Controller
var timerRange = $('<input>');
// Dynamic Timers
var topTimer = $('.timeLeft');
topTimer.css({'display':'flex','justify-content':'space-between','align-content':'center','width':'14em','align-items':'center','transition':'300 ms ease-in-out'});
timerRange.attr('type','range');
timerRange.attr('min','15');
timerRange.attr('max','99');
timerRange.attr('value','60');
timerRange.attr('class','timerRange');
timerRange.attr('id','timerRange');
var countDownTimer = timerRange.val(); // This is the number that the timer will begin counting down from
var timeRemaining = $('.timeRemaining');
timeRemaining.html(countDownTimer);
var dynamicTimerIcon = $('<i>');
dynamicTimerIcon.attr('class','fas');
dynamicTimerIcon.addClass('fa-stopwatch');
topTimer.html(dynamicTimerIcon);
topTimer.append(' | ');
var dynamicTime = $('<div id="dynamicTime">');
var dynamicTimeNumber = $('<span id="dynamicTimeNumber">');
topTimer.append(dynamicTime);
dynamicTimeNumber.html(countDownTimer);
timerRange.on('input',function(event) {
    var timerRangeValue = $(event.target).val();
    countDownTimer = timerRangeValue;
    var timeRemaining = $('.timeRemaining');
    timeRemaining.html(countDownTimer);
    dynamicTimeNumber.html(countDownTimer);
})
topTimer.append(timerRange);
dynamicTime.append(dynamicTimeNumber);
dynamicTime.append('s');
dynamicTime.append(timerRange);

// Declaring Variables
var main = $('main');
// Score Link and Hover Box
var showScoresLink = $('#showScoresLink');
var showScoresElement = $('#scoresHover');
// Main Quiz Box
var quizBox = $('.quizBox');
// Begin Game Button
var gameButton = $('.gameButton');

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

// Dynamic Question Total
var totalQuestions = $('.totalQuestions');
totalQuestions.html(questions.length);

// Sounds
var correctSound = new Audio();
correctSound.src = './assets/sounds/Correct.mp3';
var wrongSound = new Audio();
wrongSound.src = './assets/sounds/Error.mp3';
var victorySound = new Audio();
victorySound.src = './assets/sounds/Wow.mp3';
var timeoutSound = new Audio();
timeoutSound.src = './assets/sounds/wahwahwah.mp3';

// High Scores
var highScores = JSON.parse(localStorage.getItem('High Scores')) || [];

// High Scores Display
highScores.map(score => {

    // For Each Score Stored, Create & Execute
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
    // Created Blue slashes for Styling
    highScoreItems.append(blueSlashes);
    highScoreItems.append(scoreScoreElement);
    // Had to make two for some reason?
    highScoreItems.append(blueSlashes2);
    highScoreItems.append(scoreTimeLeftElement);
   showScoresElement.append(highScoreItems);

})

// If High Scores Available Fade-In-Out Animation
if (highScores.length > 0) {

    setTimeout(function() {
        showScoresElement.addClass('fadeInOut');
    }, 1500);

    // Creating Button to Clear Local Storage // Clear High Scores
    var clearButton = $('<button>');
    clearButton.html('Clear Scores');
    clearButton.on('click', function(event) {
        $(event.target).parent().children().remove();
        $(event.target).remove();
        localStorage.removeItem('High Scores');
        localStorage.clear();
        var noScoresMessage = $('<div>');
        noScoresMessage.html('No Scores to Show Yet!');
        setTimeout(function() {
            noScoresMessage.fadeIn(1000);
        }, 300);
        showScoresElement.append(noScoresMessage);
        setTimeout(function() {
            location.reload(true);
        }, 100);
        return;
    })
    // Appending Button
showScoresElement.append(clearButton);
}

// Begin Game
function beginGame() {

    // Timer Styling
    timerRange.remove();
    topTimer.css({'display':'flex','justify-content':'space-between','align-content':'center','width':'3.9em','align-items':'center','transition':'300 ms ease-in-out'});
    topTimer.fadeOut(10);
    topTimer.fadeIn(4000);
    
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

            //             //             //      GAME END FUNCTIONS       //             //             //             //

            // Time Ran Out Screen
            timeoutSound.play();
            questionBox.html('<div class="questionTitle quizBoxTitle"><h1 class="spacer questionTitleText"><b>Time Is Up!</b></h1><div class="totalPointsElement"><div class="iconContainer outerIconContainer"><div class="iconContainer" id="itemContainer">Time Remaining: <div class="customIcon transition timeRemaining" title="Time">60</div></div><div class="iconContainer" id="itemContainer">Total Points: <div class="customIcon transition userPoints"title="Points">0</div></div></div></div></div><div class=lineSepEnd></div><div id="formEntry" class="stats"><div id="userStats"><div class="stats"><div id="userName">User </div><div id="userPointsElement">Points: </div><div id="userTimeRemaining">Time Left: </div><div id="date">Today: </div></div><form id="entryForm"><input id="name" type="name" name="name" placeholder="Enter your Name"><button type="submit" id="submitButton">Submit Score</button></form></div></div>');
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
                $(event.target).parent().parent().parent().addClass('timeOutWindow');
                $(event.target).parent().parent().parent().siblings().remove();
                var userName = $(event.target).children().val();
                var timeOutWindow = $('.timeOutWindow');
                // Input Validation
                if (!$(event.target).children().val()) {
                    // event.preventDefault();
                    var alertMessage = $('<div>You Must Enter a Name to Submit Score!</div>');
                    alertMessage.attr('id','alertMessage');
                    alertMessage.attr('class','reinitializeMessage');
                    alertMessage.fadeIn();
                    timeOutWindow.append(alertMessage);
                    setTimeout(function() {
                        alertMessage.fadeOut();
                    }, 3000)
                    return;
                }
                printName.html(userName);
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
                }, 1000);
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
                victorySound.play();
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

// On Begin Game Button
    main.on('click', '.gameButton', function(event) {

        // Call back to Main Begin Game Function
        beginGame();

        // Hides the 'Begin Quiz' Element
        $(event.target).parent().hide();

        // Creating a Div for each question in our array
        // These Divs will store our questions
        questions.forEach(element => {
            var questionBox = $('<div class="contain question questionBox quizBox"><div class="questionTitle quizBoxTitle"><h1 class="spacer questionTitleText"></h1><div class="iconContainer outerIconContainerQuestions"><div class=iconContainer id=itemContainer>Time Remaining: <div class="customIcon transition timeRemaining" title="Time">' + countDownTimer + '</div></div><div class="iconContainer" id="itemContainer">Total Points: <div class="customIcon transition userPoints"title=Points>0</div></div></div></div><div class=lineSep></div><ul class="answerChoices list-group"></ul><h2 class="outOf questionIndex"></h2></div>');
            $(event.target).parent().parent().append(questionBox);
            var questionBox = $('.questionBox');
            questionBox.attr('id', 'questionBox');
        })

        //             //             //      GAME END FUNCTIONS 2       //             //             //           //

        // Quiz Finished Screen
        var endScreen = $('<div class="endScreen contain question questionBox quizBox hide timeOut"><div class="questionTitle quizBoxTitle"><h1 class="spacer questionTitleText"><b>Quiz Completed!</b></h1><div class="totalPointsElement"><div class="outerIconContainer iconContainer"><div class=iconContainer id=itemContainer>Time Remaining: <div class="customIcon transition timeRemaining" title="Time"></div></div><div class=iconContainer id=itemContainer>Total Points: <div class="customIcon transition userPoints"title="Points">0</div></div></div></div></div><div class=lineSepEnd></div><div id="formEntry" class="stats"><div id="userStats"><div class="stats"><div id="userName">User </div><div id="userPointsElement">Points: </div><div id="userTimeRemaining">Time Left: </div><div id="date">Today: </div></div><form id="entryForm"><input id="name" type="name" name="name" placeholder="Enter your Name"><button type="submit" id="submitButton">Submit Score</button></form></div></div></div>');
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
           // Input Validation
           if (!$(event.target).children().val()) {
                var alertMessage = $('<div>You Must Enter a Name to Submit Score!</div>');
                alertMessage.attr('id','alertMessage');
                alertMessage.attr('class','reinitializeMessage');
                alertMessage.fadeIn();
                endScreen.append(alertMessage);
                setTimeout(function() {
                    alertMessage.fadeOut();
                }, 3000)
                return;
            }
            printName.html(userName);
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
            }, 1000);
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
                    }, 750);

                    if ($(event.target).data('value') === correctAnswer) {

                        // Change Button color to Green if Correct
                        $(event.target).addClass('correct');

                        // Play Correct Sound
                        correctSound.play();

                        // Add 1 Point // Well, more like 0.25 points? Read more below
                        var userPointsElement = $('.userPoints');
                        if (userPoints >= 0 && userPoints < questions.length) {
                            // This is nested in a forEach loop ^
                            // So everytime i did userPoints++
                            // It would add +1 four times
                            // Once for each answer choice
                            // Instead I did '+ 1/4'
                            userPoints = userPoints + 1 / 4;
                            userPointsElement.text(userPoints);
                        }
                        userPointsElement.text(userPoints);
                    }
                    // Change Button Color to Correct
                    else if($(event.target).data('value') === incorrectAnswers || $(event.target).data('value') === incorrectAnswers2 || $(event.target).data('value') === incorrectAnswers3) {

                        // Change Button color to Red if Wrong
                        $(event.target).addClass('wrong');

                        // Play Wrong Sound
                        wrongSound.play();
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

// Hide High Scores if array is empty
if (highScores.length === 0) {
    showScoresElement.html('No Scores To Show Yet!');
}