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
    a0: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
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

function startCountdown() {
    timeInterval = setInterval(countdown, 1000);
}

function countdown() {
    time--;
    $("#time-box").text(time);
    checkTimer();
}

function checkTimer() {
    if (time === 0) {
        clearInterval(timeInterval);
        console.log("time done: " + time);
        console.log(currentQuestion);
        nextQuestion();
    }

}

function nextQuestion() {

    if (currentQuestion === questions[0]) {
        $("#question-box").text(questions[1]);
        $("#first-choice").text(answers.a1[0]);
        $("#second-choice").text(answers.a1[1]);
        $("#third-choice").text(answers.a1[2]);
        $("#fourth-choice").text(answers.a1[3]);
    
        time = 5; //change this to actual time when ready as well
        startCountdown();
        currentQuestion = questions[1];
        console.log("currentQuestion: " + currentQuestion);

    } else if (currentQuestion === questions[1]) {
        $("#question-box").text(questions[2]);
        $("#first-choice").text(answers.a2[0]);
        $("#second-choice").text(answers.a2[1]);
        $("#third-choice").text(answers.a2[2]);
        $("#fourth-choice").text(answers.a2[3]);
    
        time = 5; //change this to actual time when ready as well
        startCountdown();
        currentQuestion = questions[2];
        console.log("currentQuestion: " + currentQuestion);

    } else if (currentQuestion === questions[2]) {
        $("#question-box").text(questions[3]);
        $("#first-choice").text(answers.a3[0]);
        $("#second-choice").text(answers.a3[1]);
        $("#third-choice").text(answers.a3[2]);
        $("#fourth-choice").text(answers.a3[3]);
    
        time = 5; //change this to actual time when ready as well
        startCountdown();
        currentQuestion = questions[3];
        console.log("currentQuestion: " + currentQuestion);

    } else if (currentQuestion === questions[3]) {
        $("#question-box").text(questions[4]);
        $("#first-choice").text(answers.a4[0]);
        $("#second-choice").text(answers.a4[1]);
        $("#third-choice").text(answers.a4[2]);
        $("#fourth-choice").text(answers.a4[3]);
    
        time = 5; //change this to actual time when ready as well
        startCountdown();
        currentQuestion = questions[4];
        console.log("currentQuestion: " + currentQuestion);

    } else if (currentQuestion === questions[4]) {
        $("#question-box").text(questions[5]);
        $("#first-choice").text(answers.a5[0]);
        $("#second-choice").text(answers.a5[1]);
        $("#third-choice").text(answers.a5[2]);
        $("#fourth-choice").text(answers.a5[3]);
    
        time = 5; //change this to actual time when ready as well
        startCountdown();
        currentQuestion = questions[5];
        console.log("currentQuestion: " + currentQuestion);

    } else if (currentQuestion === questions[5]) {
        $("#question-box").text(questions[6]);
        $("#first-choice").text(answers.a6[0]);
        $("#second-choice").text(answers.a6[1]);
        $("#third-choice").text(answers.a6[2]);
        $("#fourth-choice").text(answers.a6[3]);
    
        time = 5; //change this to actual time when ready as well
        startCountdown();
        currentQuestion = questions[6];
        console.log("currentQuestion: " + currentQuestion);

    } else if (currentQuestion === questions[6]) {
        $("#question-box").text(questions[7]);
        $("#first-choice").text(answers.a7[0]);
        $("#second-choice").text(answers.a7[1]);
        $("#third-choice").text(answers.a7[2]);
        $("#fourth-choice").text(answers.a7[3]);
    
        time = 5; //change this to actual time when ready as well
        startCountdown();
        currentQuestion = questions[7];
        console.log("currentQuestion: " + currentQuestion);
    } else if (currentQuestion === questions[7]) {
        endGame();
    }
    
}

function endGame() {
    $(".question-card").text("Game Over.");
}






$("#start-button").on("click", function(){
    $("#time-box").text(30);
    $("#question-box").text(questions[0]);
    $("#first-choice").text(answers.a0[0]);
    $("#second-choice").text(answers.a0[1]);
    $("#third-choice").text(answers.a0[2]);
    $("#fourth-choice").text(answers.a0[3]);
    currentQuestion = questions[0];
    startCountdown();
});






//   $("#lap").on("click", stopwatch.recordLap);



// intervalId = setInterval(count, 1000);

// function count() {

//     // DONE: increment time by 1, remember we cant use "this" here.
//     time++;
  
//     // DONE: Get the current time, pass that into the timeConverter function,
//     //       and save the result in a variable.
//     var converted = timeConverter(time);
//     console.log(converted);
  
//     // DONE: Use the variable we just created to show the converted time in the "display" div.
//     $("#display").text(converted);
//   }
  


// setTimeout(function(){ alert("Hello"); }, 3000);
