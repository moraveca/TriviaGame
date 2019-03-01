var questions = [
    "What is the highest grossing Broadway show?",
    "Which Broadway show won the most Tony Awards?",
    "What is the longest running Broadway musical?",
    "How many actors have played the Phantom on Broadway?",
    "How many Broadway theatres are there right now?"]

var answers = {
    a0: ["The Lion King", "Phantom of the Opera", "Les Miserables", "Hamilton"], // The Lion King
    a1: ["The Producers", "Hamilton", "Wicked", "My Fair Lady"], // The Producers
    a2: ["Cats", "Chicago", "Phantom of the Opera", "The Lion King"], // Phantom of the Opera
    a3: ["3", "7", "12", "15"], // 15
    a4: ["17", "40", "55", "82"], // 40
}

var currentQuestion;

var time = 20; 

var time2 = 5;

var timeInterval;
var timeInterval2;

var correct = 0;

var wrong = 0;



function startCountdown() {
    timeInterval = setInterval(countdown, 1000);
}

function countdown() {
    time--;
    $("#time-box").text(time);
    console.log("time: " + time);
    if (time === 0) {
        clearInterval(timeInterval);
        outOfTime();
    }
}


function startCountdown2() {
    timeInterval2 = setInterval(countdown2, 1000);
}

function countdown2() {
    time2--;
    $("#get-ready").text(time2);
    console.log("time2: " + time2);
    if (time2 === 0) {
        clearInterval(timeInterval2);
        nextQuestion();
    }
}


function nextQuestion() {
    if (currentQuestion === questions[0]) {
        removeButtons();
        secondQuestion();
    } else if (currentQuestion === questions[1]) {
        removeButtons();
        thirdQuestion();
    } else if (currentQuestion === questions[2]) {
        removeButtons();
        fourthQuestion();
    } else if (currentQuestion === questions[3]) {
        removeButtons();
        fifthQuestion();
    } else if (currentQuestion === questions[4]) {
        endGame();
    }
}

function removeButtons() {
    $("#first-choice").remove();
    $("#second-choice").remove();
    $("#third-choice").remove();
    $("#fourth-choice").remove();

    var choice1 = $("<div>").attr("id", "first-choice");
    $("#answers-box").append(choice1);
    var choice2 = $("<div>").attr("id", "second-choice");
    $("#answers-box").append(choice2);
    var choice3 = $("<div>").attr("id", "third-choice");
    $("#answers-box").append(choice3);
    var choice4 = $("<div>").attr("id", "fourth-choice");
    $("#answers-box").append(choice4);
}

function youAreRight() {
    clearInterval(timeInterval);
    correct++;
    console.log("correct: " + correct + " //wrong: " + wrong);
    $(".question-card").hide();
    $(".reveal-card").show();
    $("#get-ready").text("5");
    time2 = 5;
    startCountdown2();
}

function youAreWrong() {
    clearInterval(timeInterval);
    wrong++;
    console.log("correct: " + correct + " //wrong: " + wrong);
    $(".question-card").hide();
    $(".reveal-card").show();
    $("#get-ready").text("5");
    time2 = 5;
    startCountdown2();
}

function outOfTime() {
    clearInterval(timeInterval);
    wrong++;
    console.log("correct: " + correct + " //wrong: " + wrong);
    $(".question-card").hide();
    $(".reveal-card").show();
    $("#get-ready").text("5");
    $("#right-or-wrong").text("Too late!");
    $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/closed_sign.jpg");
    time2 = 5;
    startCountdown2();

}


function endGame() {
    console.log("endGame");
    $(".reveal-card").hide();
    $(".question-card").show().html("<h2>Game Over.</h2><br><h3>Correct: " + correct + "</h3><br><h3>Wrong: " + wrong + "</h3>");
}


function firstQuestion() {
    $("#time-box").text(20);

    $("#question-box").text(questions[0]);

    $("#first-choice").text(answers.a0[0]);
    $("#second-choice").text(answers.a0[1]);
    $("#third-choice").text(answers.a0[2]);
    $("#fourth-choice").text(answers.a0[3]);

    currentQuestion = questions[0];    
    startCountdown();

    $("#first-choice").on("click", function() {
        console.log("clicked on firstQuestion");
        youAreRight();
        $("#right-or-wrong").text("You are a king!");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/lion_king_happy.jpg");
    });

    $("#second-choice").on("click", function() {
        console.log("clicked on firstQuestion");
        youAreWrong();
        $("#right-or-wrong").text("That's disappointing.");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/lion_king_disappointed.jpg");
    });

    $("#third-choice").on("click", function() {
        console.log("clicked on firstQuestion");
        youAreWrong();
        $("#right-or-wrong").text("That's disappointing.");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/lion_king_disappointed.jpg");
    });

    $("#fourth-choice").on("click", function() {
        console.log("clicked on firstQuestion");
        youAreWrong();
        $("#right-or-wrong").text("That's disappointing.");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/lion_king_disappointed.jpg");
    });
};

function secondQuestion() {
    $(".reveal-card").hide();
    $(".question-card").show();
    $("#time-box").text(20);
    
    
    $("#question-box").text(questions[1]);

    $("#first-choice").text(answers.a1[0]);
    $("#second-choice").text(answers.a1[1]);
    $("#third-choice").text(answers.a1[2]);
    $("#fourth-choice").text(answers.a1[3]);

    currentQuestion = questions[1];

    time = 20;
    
    startCountdown();

    $("#first-choice").on("click", function() {
        console.log("clicked on secondQuestion");
        youAreRight();
        $("#right-or-wrong").text("Shockingly well done!");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/producers_shocked.jpg");
    });

    $("#second-choice").on("click", function() {
        console.log("clicked on secondQuestion");
        youAreWrong();
        $("#right-or-wrong").text("Maybe next time.");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/producers_nope.jpg");
    });

    $("#third-choice").on("click", function() {
        console.log("clicked on secondQuestion");
        youAreWrong();
        $("#right-or-wrong").text("Maybe next time.");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/producers_nope.jpg");
    });

    $("#fourth-choice").on("click", function() {
        console.log("clicked on secondQuestion");
        youAreWrong();
        $("#right-or-wrong").text("Maybe next time.");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/producers_nope.jpg");
    });
};

function thirdQuestion() {
    $(".reveal-card").hide();
    $(".question-card").show();
    $("#time-box").text(20);

    $("#question-box").text(questions[2]);

    $("#first-choice").text(answers.a2[0]);
    $("#second-choice").text(answers.a2[1]);
    $("#third-choice").text(answers.a2[2]);
    $("#fourth-choice").text(answers.a2[3]);

    currentQuestion = questions[2];
        
    time = 20;
    
    startCountdown();

    $("#first-choice").on("click", function() {
        console.log("clicked on thirdQuestion");
        youAreWrong();
        $("#right-or-wrong").text("Sad.");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/phantom_sad.jpg");
    });

    $("#second-choice").on("click", function() {
        console.log("clicked on thirdQuestion");
        youAreWrong();
        $("#right-or-wrong").text("Sad.");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/phantom_sad.jpg");
    });

    $("#third-choice").on("click", function() {
        console.log("clicked on thirdQuestion");
        youAreRight();
        $("#right-or-wrong").text("You are correct!");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/phantom_happy.jpg");
    });

    $("#fourth-choice").on("click", function() {
        console.log("clicked on thirdQuestion");
        youAreWrong();
        $("#right-or-wrong").text("Sad.");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/phantom_sad.jpg");
    });    
};

function fourthQuestion() {
    $(".reveal-card").hide();
    $(".question-card").show();
    $("#time-box").text(20);

    $("#question-box").text(questions[3]);

    $("#first-choice").text(answers.a3[0]);
    $("#second-choice").text(answers.a3[1]);
    $("#third-choice").text(answers.a3[2]);
    $("#fourth-choice").text(answers.a3[3]);

    currentQuestion = questions[3];

    time = 20;
    
    startCountdown();

    $("#first-choice").on("click", function() {
        console.log("clicked on fourthQuestion");
        youAreWrong();
        $("#right-or-wrong").text("Noooooo!");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/phantom_no.jpg");
    });

    $("#second-choice").on("click", function() {
        console.log("clicked on fourthQuestion");
        youAreWrong();
        $("#right-or-wrong").text("Noooooo!");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/phantom_no.jpg");
    });

    $("#third-choice").on("click", function() {
        console.log("clicked on fourthQuestion");
        youAreWrong();
        $("#right-or-wrong").text("Noooooo!");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/phantom_no.jpg");
    });

    $("#fourth-choice").on("click", function() {
        console.log("clicked on fourthQuestion");
        youAreRight();
        $("#right-or-wrong").text("Well done!");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/phantom_applaud.jpg");
    });
}

function fifthQuestion() {
    $(".reveal-card").hide();
    $(".question-card").show();
    $("#time-box").text(20);

    $("#question-box").text(questions[4]);

    $("#first-choice").text(answers.a4[0]);
    $("#second-choice").text(answers.a4[1]);
    $("#third-choice").text(answers.a4[2]);
    $("#fourth-choice").text(answers.a4[3]);

    currentQuestion = questions[4];

    time = 20;
    
    startCountdown();

    $("#first-choice").on("click", function() {
        console.log("clicked on fifthQuestion");
        youAreWrong();
        $("#right-or-wrong").text("Nope!");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/broadway_sign.jpg");
    });

    $("#second-choice").on("click", function() {
        console.log("clicked on fifthQuestion");
        youAreRight();
        $("#right-or-wrong").text("Yes!");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/broadway_sign.jpg");
    });

    $("#third-choice").on("click", function() {
        console.log("clicked on fifthQuestion");
        youAreWrong();
        $("#right-or-wrong").text("Nope!");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/broadway_sign.jpg");
    });

    $("#fourth-choice").on("click", function() {
        console.log("clicked on fifthQuestion");
        youAreWrong();
        $("#right-or-wrong").text("Nope!");
        $("#win-lose-pic").attr("src", "../TriviaGame/assets/images/broadway_sign.jpg");
    });
}


$("#start-button").click(function(){
    $("#start-button").hide();
    firstQuestion();
});