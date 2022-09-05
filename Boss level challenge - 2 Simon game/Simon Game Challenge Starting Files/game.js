var gamePattern = []; 
var userClickedPattern = [];
var buttonColours = ["red", "green", "yellow", "blue"];
var level = 0;
var started = false;


$(document).keypress(function(e) {
    if(!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function(e) {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    console.log(userClickedPattern,gamePattern);
});

function nextSequence(){
    level++;
    $("#level-title").text("Level " + level);
    var number = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[number];
    $("#" + randomChosenColour).animate({opacity: 0.1},100).animate({opacity: 1},100);
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);    
}



function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            userClickedPattern =[];
            nextSequence();
          }, 1000);
  
        }
        
      } else {
  
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        document.querySelector("body").classList.add("game-over");
        setTimeout(function () {
            document.querySelector("body").classList.remove("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
      }
}


function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}


function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){
    document.getElementById(currentColour).classList.add('pressed');
    setTimeout(function(){ 
        document.getElementById(currentColour).classList.remove('pressed');
    },100);
}



