// Known Bugs: now for some reason, a random letter in the word becomes impossible to use, classes are not being added though I am using jQuery-sick of javascript-feeling like I try a million or so  work arounds rather than straight forward jQuery ಥ_ಥ
// 1) startGame() function - how we will start and restart the game
// $(document).ready(function() {
// Variable declaration
var wordbank = ["marduk", "gilgamesh", "enkiddu", "tiamat"];
var hiddenWord = [];
var lives = 9;
var usedLetters = [];
var randomWord;
var letters;
var letterCounter = 0;
var keyCodes = {
  65: "a",
  66: "b",
  67: "c",
  68: "d",
  69: "e",
  70: "f",
  71: "g",
  72: "h",
  73: "i",
  74: "j",
  75: "k",
  76: "l",
  77: "m",
  78: "n",
  79: "o",
  80: "p",
  81: "q",
  82: "r",
  83: "s",
  84: "t",
  85: "u",
  86: "v",
  87: "w",
  88: "x",
  89: "y",
  90: "z"
}

function startGame(){
  // Chooses random word from wordbank array
  var word = [Math.floor(Math.random()*wordbank.length)];
  randomWord = wordbank[word];

  // Takes string and splits every character into different index in array
  letters = randomWord.split("");

  // Pushes underscore in the Array
  for (var i = 0; i<letters.length; i++){
    hiddenWord.push("_");
  }
  document.getElementById("chosenWord").innerHTML = hiddenWord;
}

// 2) checkedLetters() function - it's where we will do all the comparison for matches (edited)
function checkedLetters(){
  document.onkeyup = function (event){
    var makeWord;
    var guess = event.key;
    for(var l = 0; l <= usedLetters.length-1; l++)
 {
   //Winnie I couldn't figure out how to implement a check for the keycodes-I also tried a separate if check populating an array with keyCodes
    if(usedLetters[l].indexOf(guess) != -1 || (guess.keyCodes < 65 && guess.keyCodes > 91))
       {
        return false;
       }
 }
    var guessLowercase = guess.toLowerCase();
    usedLetters.push(guessLowercase);

    document.getElementById("typedLetters").innerHTML = usedLetters;
    document.getElementById("chances").innerHTML = lives;
    letterCounter=0;
    //Loop for hiddenWord
    for (var j = 0; j<letters.length; j++){

      if (guessLowercase === letters[j]){
        hiddenWord[j]=letters[j];
        document.getElementById("chosenWord").innerHTML = hiddenWord;
        makeWord = hiddenWord.join("");
        var lastWord = hiddenWord.join("");

      }
    }
    for (var k = 0; k < randomWord.length; k++) {
      if (guessLowercase == hiddenWord[k]){
        letterCounter+=1;
      }
    }
    if (lives<1){
      // var target = document.getElementById("gameOver");
      // var button = document.getElementById("button");

// 3) roundComplete() function - Here we will have all of the code that needs to be run after each guess is made.
//doesn't work yet-look up ಠಿ_ಠ
      // function makeVisible() {
      //   var classContent = gameOver.className;
      //   gameOver.className = classContent.replace("invisible", "").trim();
      // }
      // button.addEventListener("click", makeVisible, false);
    }
    if (letterCounter === 0){
      lives -= 1;
      document.getElementById("chances").innerHTML=lives;
    }
    //ಥ﹏ಥ
    if(makeWord === hiddenWord){
      var refreshButton = $("<button>");
      refreshButton.addClass("display");
      $("gameOver").append(refreshButton);
      //banner below/above saying congratulating. Clone for lose
      document.getElementById("win").innerHTML="You Win, yesss!";

    }

  }
}

// 4) Call the startGame() function at the end to reset the game
startGame();
checkedLetters();
//End of Document Ready Function
// });
