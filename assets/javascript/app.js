var questions = [
    "What is the highest grossing Broadway show?",
    "Which Broadway show won the most Tony Awards?",
    "What is the longest running Broadway musical?",
    "How many actors have played the Phantom on Broadway?",
    "How many Broadway theatres are there right now?"]

var answers = {
    a0: ["The Lion King", "Phantom of the Opera", "Les Miserables", "Hamilton"],
    a1: ["The Producers", "Hamilton", "Wicked", "My Fair Lady"],
    a2: ["Cats", "Chicago", "Phantom of the Opera", "The Lion King"],
    a3: ["3", "7", "12", "15"],
    a4: ["17", "40", "55", "82"],
}

var currentQuestion;

var time = 5; //change this to 30 or whatever when ready for longer time

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
        secondQuestion();
    } else if (currentQuestion === questions[1]) {
        thirdQuestion();
    } else if (currentQuestion === questions[2]) {
        fourthQuestion();
    } else if (currentQuestion === questions[3]) {
        fifthQuestion();
    } else if (currentQuestion === questions[4]) {
        endGame();
    }
}



function youAreRight() {
    clearInterval(timeInterval);
    correct++;
    console.log("correct: " + correct + " //wrong: " + wrong);
    $(".question-card").hide();
    $(".reveal-card").show();
    $(".reveal-card").text("You are RIGHT!");
    $("#get-ready").text(5);
    time2 = 5;
    startCountdown2();
}

function youAreWrong() {
    clearInterval(timeInterval);
    wrong++;
    console.log("correct: " + correct + " //wrong: " + wrong);
    $(".question-card").hide();
    $(".reveal-card").show();
    $(".reveal-card").text("You are WRONG!");
    time2 = 5;
    startCountdown2();
}

function outOfTime() {
    clearInterval(timeInterval);
    wrong++;
    console.log("correct: " + correct + " //wrong: " + wrong);
    $(".question-card").hide();
    $(".reveal-card").show();
    $(".reveal-card").text("Too late!");
    time2 = 5;
    startCountdown2();

}




function endGame() {
    console.log("endGame");
    $(".reveal-card").hide();
    $(".question-card").show().html("<h2>Game Over.</h2><br><h3>Correct: </h3>" + correct + "<br><h3>Wrong: </h3>" + wrong);
}



function firstQuestion() {
    $("#time-box").text(30);

    $("#question-box").text(questions[0]);

    $("#first-choice").text(answers.a0[0]);
    $("#second-choice").text(answers.a0[1]);
    $("#third-choice").text(answers.a0[2]);
    $("#fourth-choice").text(answers.a0[3]);

    currentQuestion = questions[0];    
    startCountdown();

    $("#first-choice").on("click", function() {
        youAreRight();
    });

    $("#second-choice").on("click", function() {
        youAreWrong();
    });

    $("#third-choice").on("click", function() {
        youAreWrong();
    });

    $("#fourth-choice").on("click", function() {
        youAreWrong();
    });
};

function secondQuestion() {
    $(".reveal-card").hide();
    $(".question-card").show();
    
    $("#question-box").text(questions[1]);

    $("#first-choice").text(answers.a1[0]);
    $("#second-choice").text(answers.a1[1]);
    $("#third-choice").text(answers.a1[2]);
    $("#fourth-choice").text(answers.a1[3]);

    currentQuestion = questions[1];

    time = 5; //change this to actual time when ready as well
    
    startCountdown();

    $("#first-choice").on("click", function() {
        youAreRight();
    });

    $("#second-choice").on("click", function() {
        youAreWrong();
    });

    $("#third-choice").on("click", function() {
        youAreWrong();
    });

    $("#fourth-choice").on("click", function() {
        youAreWrong();
    });
};

function thirdQuestion() {
    $(".reveal-card").hide();
    $(".question-card").show();

    $("#question-box").text(questions[2]);

    $("#first-choice").text(answers.a2[0]);
    $("#second-choice").text(answers.a2[1]);
    $("#third-choice").text(answers.a2[2]);
    $("#fourth-choice").text(answers.a2[3]);

    currentQuestion = questions[2];
        
    time = 5; //change this to actual time when ready as well
    
    startCountdown();

    $("#first-choice").on("click", function() {
        youAreWrong();
    });

    $("#second-choice").on("click", function() {
        youAreWrong();
    });

    $("#third-choice").on("click", function() {
        youAreRight();
    });

    $("#fourth-choice").on("click", function() {
        youAreWrong();
    });    
};

function fourthQuestion() {
    $(".reveal-card").hide();
    $(".question-card").show();

    $("#question-box").text(questions[3]);

    $("#first-choice").text(answers.a3[0]);
    $("#second-choice").text(answers.a3[1]);
    $("#third-choice").text(answers.a3[2]);
    $("#fourth-choice").text(answers.a3[3]);

    currentQuestion = questions[3];

    time = 5; //change this to actual time when ready as well
    
    startCountdown();

    $("#first-choice").on("click", function() {
        youAreWrong();
    });

    $("#second-choice").on("click", function() {
        youAreWrong();
    });

    $("#third-choice").on("click", function() {
        youAreWrong();
    });

    $("#fourth-choice").on("click", function() {
        youAreRight();
    });
}

function fifthQuestion() {
    $(".reveal-card").hide();
    $(".question-card").show();

    $("#question-box").text(questions[4]);

    $("#first-choice").text(answers.a4[0]);
    $("#second-choice").text(answers.a4[1]);
    $("#third-choice").text(answers.a4[2]);
    $("#fourth-choice").text(answers.a4[3]);

    currentQuestion = questions[4];

    time = 5; //change this to actual time when ready as well
    
    startCountdown();

    $("#first-choice").on("click", function() {
        youAreWrong();
    });

    $("#second-choice").on("click", function() {
        youAreRight();
    });

    $("#third-choice").on("click", function() {
        youAreWrong();
    });

    $("#fourth-choice").on("click", function() {
        youAreWrong();
    });
}


$("#start-button").click(function(){
    $("#start-button").hide();
    firstQuestion();
});