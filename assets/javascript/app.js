var allQuestions = [{
    question: "What was the name of the second Indiana Jones movie, released in 1984?",
    choices: ["Indiana Jones and the Temple of Doom", "Indiana Jones and the Raiders of the Lost Arc", "Indiana Jones and the Kingdom of Crystul Skull","Indiana Jones and the Last Crusade"],
    correctAnswer: 0,
    imgSrc: "assets/images/jones.gif",
    msg: "Indiana Jones and the Temple of Doom was the second in the series. The next in the series, the fifth film is rumoured to be released in 2020."
  },
  { question: "'After all, tomorrow is another day!' is the last line from which movie that won the Academy Award for Best Picture in 1939?",
    choices: ["The Wizard of Oz", "Gunga Din", "Gone With the Wind", "Wuthering Heights"],
    correctAnswer: 2,
    imgSrc: "assets/images/gone.gif",
    msg: "It's Gone with the Wind! The Epic Civil War drama that focuses on the life of petulant southern belle Scarlett O'Hara played by Vivien Leigh"
  },
  { question: "Which movie features Bruce Willis as John McClane, a New York police officer, taking on a gang of criminals in a Los Angeles skyscraper on Christmas Eve",
    choices: ["12 Monkeys", "Die Hard", "Sixth Sense","Red"],
    correctAnswer: 1,
    imgSrc: "assets/images/diehard.gif",
    msg: "Yippee Ki-yay!!! It is, of course, Die Hard"
  },
  { question: "Which 1952 musical comedy tells the story of three performers making the transition from silent movies to talkies?",
    choices: ["Hans Christian Andersen", "Singin' in the Rain", "The Greatest Show on Earth", "With a Song in MY Heart"],
    correctAnswer: 1,
    imgSrc: "assets/images/singing.gif",
    msg:"A spoof of the turmoil that afflicted the movie industry in the late 1920s when movies went from silent to sound. It is 'Singing in the Rain'"
  },
  { question: "Name the charming Rom-Com that featured the now-famous phrase 'As you wish.'",
    choices: ["Ever After: A Cinderella Story", "Alladin", "The Princess Bride", "Stadust"],
    correctAnswer: 2,
    imgSrc: "assets/images/AsYouWish.gif",
    msg: "The Princess Bride is a 1987 American romantic fantasy adventure comedy film directed and co-produced by Rob Reiner, and starring Cary Elwes, Robin Wright."
  },
  { question: "What 1961 movie has Audrey Hepburn note: 'Personally, I think it's a bit tacky to wear diamonds before I'm 40'",
    choices: ["Breakfast at Tiffany's", "My Fair Lady", "Roman Holiday", "Charade"],
    correctAnswer: 0,
    imgSrc: "assets/images/tiffany.gif",
    msg: "Breakfast at Tiffany's is a 1961 American romantic comedy film directed by Blake Edwards and written by George Axelrod, loosely based on Truman Capote's novella of the same name. Starring Audrey Hepburn and George Peppard."
  },
  { question: "What is the name of Boba Fett's ship in Star Wars Movie?",
    choices: ["Slave One", "Rouge One", "Death Star","Millenium Falcon"],
    correctAnswer: 0,
    imgSrc: "assets/images/boba.gif",
    msg: "Riding 'Slave One', with his customized Mandalorian armor, deadly weaponry, and silent demeanor, Boba Fett was one of the most feared bounty hunters in the galaxy"
  },
  { question: "Which famous movie from the 1980's features a deLorean?",
    choices: ["Top Gun", "Blade Runner", "Robocop","Back to the Future"],
    correctAnswer: 3,
    imgSrc: "assets/images/delorean.gif",
    msg: "The DeLorean DMC-12 is the automobile-based time travel device featured in the Back to the Future franchise"
  },
  { question: "Apple co-founder Steve Jobs produced only one film during his lifetime. Name the movie.",
    choices: ["A.I. Artificial Intelligence", "War Games", "Toy Story", "Hackers"],
    correctAnswer: 2,
    imgSrc: "assets/images/toy.gif",
    msg: "Toy Story credits show Steve Jobs as the Executive Producer . In 1986, Jobs acquired the computer graphics division of Lucasfilm, Ltd. and renamed it Pixar Animation Studios. The Walt Disney Company acquired Pixar on May 5, 2006"
  },
  {
    question: "In the Superman movies, what newspaper does Clark Kent work for?",
    choices: ["The Daily Propher", "The Daily Bugle", "The Daily Planet", "The Daily Herald"],
    correctAnswer: 2,
    imgSrc: "assets/images/kent.gif",
    msg: "The Daily Planet is a fictional broadsheet newspaper owned by  Morgan Edge, Franklin Stern, Lex Luthor, and Bruce Wayne."
  }
];
var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
var noAnswer = 1;
var timerClock;
var timeoutClock;
var checkedAnswer=0;

/*BEGIN WITH USER CLICKING ON 'Lets Begin' Button*/ 

function setupOptions() {
  noAnswer = 1; // user did NOT choose an answer (1 = not selected)
  checkedAnswer = 0; // the script checked the user's response (0 = not checked)
  $("#curQ").html(parseInt(currentQuestion) + 1)
  $('#question').html(parseInt(currentQuestion) + 1 + ". " + allQuestions[currentQuestion].question);
  var options = allQuestions[currentQuestion].choices;
  var formHtml = '';
  for (var i = 0; i < options.length; i++) {
    formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '" onclick="checkAns()"><label for="option' + i + '">' +
      allQuestions[currentQuestion].choices[i] + '</label></div><br/>';
  }
  $('#form').html(formHtml);
  var distance = 20;
  var now = -1;
  timerClock = setInterval(function() {

    // time already spent
    now++;
    
    // Find the distance between now an the count down date
    distance = 20 - now;
      
    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML = distance;
        // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(timerClock);
        document.getElementById("countdown").innerHTML = "Time's Up!";
        checkAns();
    }
  }, 1000);
//timeoutClock=setTimeout(checkAns, 20000);

}; //end setupOptions()

function checkAns() {
  // we are here means that user checked some answer and triggered onclick event or Timed out or clicked next
  // so lets reset noanswer to zero
  window.clearInterval(timerClock);
  //cleatTimeout(timeoutClock);

/*  // disable user from changing his answer
  if ($("input[name=option]:checked").val()) {
      for (var i = 0; i < options.length; i++) { 
          var idName = "option"+i; 
          $("#idName").removeAttr('onclick');
      };// end for
  }; // end if */


  // ALL THIS SHOULD HAPPEN ONLY ONCE PER QUESTION.
  // We are processing user option. can't let user change it again.
  if (!checkedAnswer) {
    checkedAnswer=1;
  console.log("DEBUG in checkAns... noAnswer="+noAnswer+" checked "+ $("input[name=option]:checked").val() 
              + "correct Answer " + allQuestions[currentQuestion].correctAnswer + "currentQ " + currentQuestion
             );
  var alertHtml = ' '; // var to hold the message to show the chosen answer is correct or not
  //prepare and display the image related to the questions that was just answered
  document.getElementById("image").src = allQuestions[currentQuestion].imgSrc;
  $("#image").fadeIn();
  // now, show the correct answer along with alerting user to the correctness of his choice
  // we will also updated the score board appropriately
  // 1. if the answer is correct
  if ($("input[name=option]:checked").val() == allQuestions[currentQuestion].correctAnswer) {
    noAnswer = 0;
    correctAnswers++;
    alertHtml = '<div class="alert alert-success" role="alert">CORRECT! <p>'+allQuestions[currentQuestion].msg+'</p></div>';
    $("#correct").html(correctAnswers);
    $("#amIRight").html(alertHtml);
  };
  // if the answer is wrong
  if ( $("input[name=option]:checked").val() && $("input[name=option]:checked").val() != allQuestions[currentQuestion].correctAnswer) { 
    noAnswer = 0;
    incorrectAnswers++;
    alertHtml = '<div class="alert alert-danger" role="alert">WRONG!! <p>'+allQuestions[currentQuestion].msg+'</p></div>';
    $("#incorrect").html(incorrectAnswers);
    $("#amIRight").html(alertHtml);
  };
  //if the question is skipped (timeout)
  if(noAnswer == 1 ){ //||  !$("input[name=option]:checked").val() ){
    console.log("DEBUG: in if loop");
    noAnswer = 0;
    unAnswered++;
    alertHtml = '<div class="alert alert-warning" role="alert">....OOOPS! You missed it!! <p>'+allQuestions[currentQuestion].msg+'</p></div>';
    $("#skippedQ").html(unAnswered);//currentQuestion - correctAnswers - incorrectAnswers + 1);
    $("#amIRight").html(alertHtml);
    //setTimeout(console.log("DEBUG:User Skipped Question"),10000);
  };
  // update the scoreboard
  $("#remainingQ").html(allQuestions.length - currentQuestion  - 1);
  // remove the question and the answer
  $("image").delay(1000).fadeOut(); $("amIRight").html("");
  }; // if !checkedAnswer 



}; // end checkAns()


function updateProgress() {
    var percentage = (currentQuestion+1)*10;
    var percentProgress = "width:" + percentage + "%";
     $('.progress-bar').css('width', percentage + '%').attr('aria-valuenow', currentQuestion+1);
    $("#percentComplete").html(percentage);
}; // end updateProgress()

function paintWelcomeScreen() {
          var welcomeMsg = '';

          currentQuestion = 0;
          correctAnswers = 0;
          incorrectAnswers = 0;
          unAnswered = 0;
          noAnswer = 1;
          $("#next").fadeOut(1);
          $("#curQ").html("0");

          $('.progress-bar').css('width', 0 + '%').attr('aria-valuenow', currentQuestion+1);
          $("#percentComplete").html("0");

          $("#question").html("Are you ready to find out your odds?"); 

          var dummyOptions=["Odds Are Stacked Against Me", "Odds Are Stacked In My Favour", "Odds Are Fairly 50-50"];

          for (var i = 0; i < dummyOptions.length; i++) {
              welcomeMsg += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' + dummyOptions[i] + '</label></div><br/>';
          } // end of for() loop
          // <div><input type="radio" name="option" value="i" id="optioni"><label for="optioni">dummyOptions</label></div><br/>
          $("#form").html(welcomeMsg);
          $("#odds").html("<h3>MAY THE ODDS EVER BE IN YOUR FAVOUR</h3>");
          document.getElementById("image").src = "assets/images/odds-solo.gif";
          //$("#image").src("assets/images/odds-solo.gif");
          $("#start").html("Never Tell Me the Odds. Let's Begin");

/*
          // the following will refresh the score board and countdown clock
          %("#countdown").html("20");
          $("#correct").html(correctAnswers);
          $("#incorrect").html(incorrectAnswers);
          $("#skippedQ").html(unAnswered);
          $("#remainingQ").html(allQuestions.length - currentQuestion  - 1);
*/
//          window.clearInterval(timerClock);


          $("#start").fadeIn(1);
          $("#next").fadeOut(1);
          $("#image").fadeIn(1);
}; // paintWelcomeScreen();

//    ************* MAIN GAME FUNCTION ******************
function startGame() { 
  // first open screen give option for the user to start the game
  $("#next").fadeOut(1);
  console.log("In StartGame");
  $("#start").click(function() { // do this when user says let's start the game
      $("#odds").html(""); // clear opening message
      document.getElementById("image").src = "";
      //$("#image").src("");  // clear openeing image  assets/images/odds-solo.gif
      $("#start").fadeOut(1); // hide start game button - user just pressed it
      setupOptions(); // set up the first question and the answer choices and display them
      $("#correct").html(correctAnswers);
      $("#incorrect").html(incorrectAnswers);
      $("#skippedQ").html(unAnswered);
      $("#remainingQ").html(allQuestions.length - currentQuestion  - 1);
      //window.clearInterval(timerClock);

      $('#next').html("Next Question"); // show the "Next" button to allow user to move to next quetion
      $("#next").fadeIn();
      $("#image").fadeOut(); // clear image after first question is setup
  }); //end start.click() --- that is let's begin button

  // at this point, the screen should show the first question
  // waiting for user to select his answer
  // when the user selects the answer, checkAns() is called by
  // rediobutton.onclick event
  // This function  [checkAns()], tells the user if his selection is correct or not
  // displays the correct answer and a relevant image/video
  // waits for him to click on 'Next' botton to go to next question


  $("#next").click(function() { // Ok. so user clicked on next button.
    event.preventDefault();

    // so user clicked on next button. 
    // first lets majke sure if the user skipped the question.
    // if any answer was chosen, then noAnswer would have been
    // set to 0 by radioButton.onclick function checkAns()
    // reset the value of noAnswer to initial value for the next round
    if (noAnswer) { // ok user skipped question meaning checkAns() was not run
//        var alertHtml = '<div class="alert alert-warning" role="alert">OK! So, you skipped the question. Not a Problem. <p>'+allQuestions[currentQuestion].msg+'</p></div>';
//        $("#amIRight").html(alertHtml);
        //noAnswer=0;
        checkAns();
        noAnswer = 0;
//        console.log("DEBUG: if noAnswer");
    }
    else {
//    if (!noAnswer) { //we just came back from checkAns(). reset noAnswer
        noAnswer = 1; 
    //};


    $("#image").fadeOut(1);      // clear the prev image and 
    $("#amIRight").html("");     // and the related messages
    updateProgress();            // update the progress bar

    currentQuestion++;           // move to the next question 

    // follows some logic to determine what to do if no more questions left

    // questions still remain
    if (currentQuestion < allQuestions.length) { 
      setupOptions();                            // so set up the question and answer choices and display them
    }; // if questions are still remaining 

    // next version remove this  and go to an else statement where we ask the user to play again.
    if (currentQuestion == allQuestions.length) { // ie., if all questions are done
      // clean up and start the game again
        var timerClock;
        paintWelcomeScreen();     
        startGame();
      }; //if all questions are done
    }; //if !noAnswer  
   });  // next.click()
}; // end of startGame()
//    ************ END MAIN GAME FUNTION ****************

/// THIS IS THE STARTING POINT ON DOCUMENT LOAD
$(document).ready(function() {
  // paint the welcomeScreen
  paintWelcomeScreen();
  // Start the main game loop
  startGame();
}); //document.ready()