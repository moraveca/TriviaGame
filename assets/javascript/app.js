var questions = [
    "What will question one be?",
    "What will question two be?",
    "What will question three be?",
    "What will question four be?",
    "What will question five be?",
    "What will question six be?",
    "What will question seven be?",
    "What will question eight be?"]

var answers = {
    a0: ["1Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    a1: ["2Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    a2: ["3Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    a3: ["4Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    a4: ["5Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    a5: ["6Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    a6: ["7Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    a7: ["8Answer 1", "Answer 2", "Answer 3", "Answer 4"],
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
        nextQuestion();
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
        sixthQuestion();
    } else if (currentQuestion === questions[5]) {
        seventhQuestion();
    } else if (currentQuestion === questions[6]) {
        eighthQuestion();
    } else if (currentQuestion === questions[7]) {
        endGame();
    }
}



function youAreRight() {
    clearInterval(timeInterval);
    correct++;
    console.log("correct: " + correct + " //wrong: " + wrong);
    $(".question-card").hide();
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
    $(".reveal-card").text("You are WRONG!");
    startCountdown2();
    time2 = 5;
}




function endGame() {
    $(".question-card").text("Game Over.");
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
        youAreRight();
    });

    $("#third-choice").on("click", function() {
        youAreWrong();
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
        youAreRight();
    });

    $("#third-choice").on("click", function() {
        youAreWrong();
    });

    $("#fourth-choice").on("click", function() {
        youAreWrong();
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
        youAreWrong();
    });

    $("#third-choice").on("click", function() {
        youAreRight();
    });

    $("#fourth-choice").on("click", function() {
        youAreWrong();
    });
}

function sixthQuestion() {
    $(".reveal-card").hide();
    $(".question-card").show();

    $("#question-box").text(questions[5]);

    $("#first-choice").text(answers.a5[0]);
    $("#second-choice").text(answers.a5[1]);
    $("#third-choice").text(answers.a5[2]);
    $("#fourth-choice").text(answers.a5[3]);

    currentQuestion = questions[5];

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
}

function seventhQuestion() {
    $(".reveal-card").hide();
    $(".question-card").show();

    $("#question-box").text(questions[6]);

    $("#first-choice").text(answers.a6[0]);
    $("#second-choice").text(answers.a6[1]);
    $("#third-choice").text(answers.a6[2]);
    $("#fourth-choice").text(answers.a6[3]);

    currentQuestion = questions[6];

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

function eighthQuestion() {
    $(".reveal-card").hide();
    $(".question-card").show();

    $("#question-box").text(questions[7]);

    $("#first-choice").text(answers.a7[0]);
    $("#second-choice").text(answers.a7[1]);
    $("#third-choice").text(answers.a7[2]);
    $("#fourth-choice").text(answers.a7[3]);

    currentQuestion = questions[7];

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


$("#start-button").click(function(){
    $("#start-button").hide();
    firstQuestion();
});