
//Variable Declaration
var wordbank = ["marduk", "gilgamesh", "enkiddu", "tiamat"];
var hiddenWordArr = [];
var lives = 9;
var usedLetters = [];
var randomWord;
var lettersArr;
var letterCounter = 0;

//start game function finds a word

function startGame(){
  //use a button to get phone keyboard
  var textbox = document.getElementById('my-input');
  textbox.select();

  // Chooses random word from wordbank array
  var word = [Math.floor(Math.random()*wordbank.length)];
  randomWord = wordbank[word];

  // Takes string and splits every character into different index in array
  lettersArr = randomWord.split("");

  // Pushes underscore in the Array
  for (var i = 0; i<lettersArr.length; i++){
    // hiddenWordArr.split("");
    hiddenWordArr.push("_");
  }
  document.getElementById("chosenWord").innerHTML = hiddenWordArr.join(" ");
}

// 2) checkedLetters() function - it's where we will do all the comparison for matches (edited)
function checkedLetters(){
  document.onkeyup = function (event){
    var makeWord;
    var guess = event.key;
    if (event.keyCode < 65 ||  event.keyCode >= 91){
      return false;
    }
    console.log(event);
    var guessLowercase = guess.toLowerCase();
    if (usedLetters.includes(guessLowercase) ){
      // display message to user that they've guessed this letter
      return false;
    }
    if (lives>0){
    usedLetters.push(guessLowercase);
    document.getElementById("typedLetters").innerHTML = "You've tried: " + usedLetters.join(" ");
    document.getElementById("chances").innerHTML = lives;
  }


      //Loop for hiddenWordArr
    for (var j = 0; j < lettersArr.length; j++){

      if (guessLowercase === lettersArr[j]){
        hiddenWordArr[j] = lettersArr[j];
      }
    }

    document.getElementById("chosenWord").innerHTML = hiddenWordArr.join(" ");

    if (letterCounter === 0 && lives > 0){
      lives -= 1;
      document.getElementById("chances").innerHTML="lives: " + lives;
    }

// 3) reload
    if(randomWord === hiddenWordArr.join("")){
      var refreshButton = $("<button>");
      refreshButton.addClass("display");
      $("#gameOver").append(refreshButton);
      //banner below/above saying congratulating. Clone for lose
    }
    //when div appears, if clicked restart game
    document.getElementById("#gameOver").onClick = function(){
      location.reload();
    }
  }
}

// 4) Call the startGame() function at the end to reset the game
startGame();
checkedLetters();
//End of Document Ready Function
// });
