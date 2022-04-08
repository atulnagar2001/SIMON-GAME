var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}



// var buttoncolors = ["red", "blue", "green", "yellow"];
// var gamePattern = [];
// var userClickedPattern = [];
// var started = false;
// var level = 0;
//
// $(document).keypress(function(){
//   if(!started){
//     $("#level-title").text("Level " + level);
//     nextsequence();
//     started = true;
//   }
// });
//
//
// $(".btn").click(function(){
//   var userchoosencolor =  $(this).attr("id");
//   userClickedPattern.push(userchoosencolor);
//   playsound(userchoosencolor);
//   animatepress(userchoosencolor);
//   checkAnswer(userClickedPattern.length-1);
// });
//
// function checkAnswer(currentLevel) {
//
//     //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//       //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
//       if (userClickedPattern.length === gamePattern.length){
//
//         //5. Call nextSequence() after a 1000 millisecond delay.
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//
//       }
//
//     } else {
//            playsound("wrong");
//            $("body").addClass("game-over");
//            $("h1").text("Game Over, Press Any Key to Restart");
//
//            setTimeout(function(){
//              $("body").removeClass("game-over");
//            },200);
//
//            startover();
//     }
//
// }
//
// function nextsequence(){
//   userClickedPattern = [];
//   level = level +1;
//   $("#level-title").text("Level " + level);
//   var randomNumber = Math.floor(Math.random()*4);
//   var randomChosenColour = buttoncolors[randomNumber];
//   gamePattern.push(randomChosenColour);
//
//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playsound(randomChosenColour);
// }
//  function playsound(name){
//    var sound = new Audio("sounds/"+ name +".mp3");
//    sound.play();
//  }
//
// function animatepress(currentcolor){
//   $("#"+ currentcolor).addClass("pressed");
//
//   setTimeout(function(){
//     $("#"+ currentcolor).removeClass("pressed");
//   },100);
// }
//
// function startover(){
//   level = 0;
//   gamePattern = [];
//   started = false;
// }
