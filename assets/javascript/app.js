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

var timeInterval;

var correct = 0;

var wrong = 0;

var clicked = false;

function startCountdown() {
    timeInterval = setInterval(countdown, 1000);
}

function countdown() {
    time--;
    $("#time-box").text(time);
    console.log("time: " + time);
    // checkTimer();
    checker();
}


// This one worked for time only......
// function checkTimer() {
//     if (time === 0) {
//         clearInterval(timeInterval);
//         nextQuestion();
//         $("#time-box").text("30");
//     }
// }

function moveOn() {
    clearInterval(timeInterval);
    nextQuestion();
    $("#time-box").text("30");
}

function checker() {
    if (clicked) {
        console.log("currentQuestion: " + currentQuestion)
        moveOn();
    } else if (time === 0) {
        moveOn();
    }
}

$("#start-button").on("click", function(){
    $("#start-button").hide();
    $("#time-box").text(30);

    $("#question-box").text(questions[0]);

    $("#first-choice").text(answers.a0[0]);
    $("#second-choice").text(answers.a0[1]);
    $("#third-choice").text(answers.a0[2]);
    $("#fourth-choice").text(answers.a0[3]);

    currentQuestion = questions[0];    
    startCountdown();

    $("#first-choice").on("click", function() {
        correct++;
        console.log("correct: " + correct + "//wrong: " + wrong);
        console.log("I clicked #first-choice.(first)");
        clicked = true;
    });

    $("#second-choice").on("click", function() {
        wrong++;
        console.log("correct: " + correct + "//wrong: " + wrong);
        console.log("I clicked #second-choice.(first)");
        clicked = true;
    });

    $("#third-choice").on("click", function() {
        wrong++;
        console.log("correct: " + correct + "//wrong: " + wrong);
        console.log("I clicked #third-choice.(first)");
        clicked = true;
    });

    $("#fourth-choice").on("click", function() {
        wrong++;
        console.log("correct: " + correct + "//wrong: " + wrong);
        console.log("I clicked #fourth-choice.(first)");
        clicked = true;
    });

    checker();
});


function nextQuestion() {
    
    if (currentQuestion === questions[0]) {
        
        $("#question-box").text(questions[1]);

        $("#first-choice").text(answers.a1[0]);
        $("#second-choice").text(answers.a1[1]);
        $("#third-choice").text(answers.a1[2]);
        $("#fourth-choice").text(answers.a1[3]);

        currentQuestion = questions[1];
        clicked = false;

        time = 5; //change this to actual time when ready as well
        
        startCountdown();

        $("#first-choice").on("click", function() {
            correct++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #first-choice.(second)");
            clicked = true;
        });
    
        $("#second-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #second-choice.(second)");
            clicked = true;
        });
    
        $("#third-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #third-choice.(second)");
            clicked = true;
        });
    
        $("#fourth-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #fourth-choice.(second)");
            clicked = true;
        });

        checker();
        

    } else if (currentQuestion === questions[1]) {
        $("#question-box").text(questions[2]);

        $("#first-choice").text(answers.a2[0]);
        $("#second-choice").text(answers.a2[1]);
        $("#third-choice").text(answers.a2[2]);
        $("#fourth-choice").text(answers.a2[3]);

        currentQuestion = questions[2];
        clicked = false;
            
        time = 5; //change this to actual time when ready as well
        
        startCountdown();

        $("#first-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #first-choice.(third)");
            clicked = true;
        });
    
        $("#second-choice").on("click", function() {
            correct++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #second-choice.(third)");
            clicked = true;
        });
    
        $("#third-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #third-choice.(third)");
            clicked = true;
        });
    
        $("#fourth-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #fourth-choice.(third)");
            clicked = true;
        });    

        checker();


    } else if (currentQuestion === questions[2]) {
        $("#question-box").text(questions[3]);

        $("#first-choice").text(answers.a3[0]);
        $("#second-choice").text(answers.a3[1]);
        $("#third-choice").text(answers.a3[2]);
        $("#fourth-choice").text(answers.a3[3]);

        currentQuestion = questions[3];
        clicked = false;

        time = 5; //change this to actual time when ready as well
        
        startCountdown();

        $("#first-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #first-choice.(fourth)");
            clicked = true;
        });
    
        $("#second-choice").on("click", function() {
            correct++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #second-choice.(fourth)");
            clicked = true;
        });
    
        $("#third-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #third-choice.(fourth)");
            clicked = true;
        });
    
        $("#fourth-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #fourth-choice.(fourth)");
            clicked = true;
        });
    
        checker();


    } else if (currentQuestion === questions[3]) {
        $("#question-box").text(questions[4]);

        $("#first-choice").text(answers.a4[0]);
        $("#second-choice").text(answers.a4[1]);
        $("#third-choice").text(answers.a4[2]);
        $("#fourth-choice").text(answers.a4[3]);

        currentQuestion = questions[4];
        clicked = false;
    
        time = 5; //change this to actual time when ready as well
        
        startCountdown();

        $("#first-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #first-choice.(fifth)");
            clicked = true;
        });
    
        $("#second-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #second-choice.(fifth)");
            clicked = true;
        });
    
        $("#third-choice").on("click", function() {
            correct++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #third-choice.(fifth)");
            clicked = true;
        });
    
        $("#fourth-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #fourth-choice.(fifth)");
            clicked = true;
        });
    
        checker();


    } else if (currentQuestion === questions[4]) {
        $("#question-box").text(questions[5]);

        $("#first-choice").text(answers.a5[0]);
        $("#second-choice").text(answers.a5[1]);
        $("#third-choice").text(answers.a5[2]);
        $("#fourth-choice").text(answers.a5[3]);

        currentQuestion = questions[5];
        clicked = false;
    
        time = 5; //change this to actual time when ready as well
        
        startCountdown();

        $("#first-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #first-choice.(sixth)");
            clicked = true;
        });
    
        $("#second-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #second-choice.(sixth)");
            clicked = true;
        });
    
        $("#third-choice").on("click", function() {
            correct++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #third-choice.(sixth)");
            clicked = true;
        });
    
        $("#fourth-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #fourth-choice.(sixth)");
            clicked = true;
        });
    
        checker();


    } else if (currentQuestion === questions[5]) {
        $("#question-box").text(questions[6]);

        $("#first-choice").text(answers.a6[0]);
        $("#second-choice").text(answers.a6[1]);
        $("#third-choice").text(answers.a6[2]);
        $("#fourth-choice").text(answers.a6[3]);

        currentQuestion = questions[6];
        clicked = false;
    
        time = 5; //change this to actual time when ready as well
        
        startCountdown();

        $("#first-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #first-choice.(seventh)");
            clicked = true;
        });
    
        $("#second-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #second-choice.(seventh)");
            clicked = true;
        });
    
        $("#third-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #third-choice.(seventh)");
            clicked = true;
        });
    
        $("#fourth-choice").on("click", function() {
            correct++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #fourth-choice.(seventh)");
            clicked = true;
        });
    
        checker();


    } else if (currentQuestion === questions[6]) {
        $("#question-box").text(questions[7]);

        $("#first-choice").text(answers.a7[0]);
        $("#second-choice").text(answers.a7[1]);
        $("#third-choice").text(answers.a7[2]);
        $("#fourth-choice").text(answers.a7[3]);

        currentQuestion = questions[7];
        clicked = false;
    
        time = 5; //change this to actual time when ready as well
        
        startCountdown();

        $("#first-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #first-choice.(eighth)");
            clicked = true;
        });
    
        $("#second-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #second-choice.(eighth)");
            clicked = true;
        });
    
        $("#third-choice").on("click", function() {
            wrong++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #third-choice.(eighth)");
            clicked = true;
        });
    
        $("#fourth-choice").on("click", function() {
            correct++;
            console.log("correct: " + correct + "//wrong: " + wrong);
            console.log("I clicked #fourth-choice.(eighth)");
            clicked = true;
        });
    
        checker();

        
    } else if (currentQuestion === questions[7]) {

        endGame();
    }
    
}



function endGame() {
    $(".question-card").text("Game Over.");
}