// 1) startGame() function - how we will start and restart the game
// $(document).ready(function() {
// Variable declaration
var wordbank = ["marduk", "gilgamesh", "enkiddu", "tiamat"];
var acceptableChars = ["a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var hiddenWord = [];
var lives = 9;
var usedLetters = [];
var randomWord;
var letters;
var letterCounter = 0;
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
    var guessLowercase=guess.toLowerCase();
    usedLetters.push(guessLowercase);

    document.getElementById("typedLetters").innerHTML = usedLetters;
    document.getElementById("chances").innerHTML = lives;
    letterCounter=0;
    //Loop for hiddenWord
    for (var j = 0; j<letters.length; j++){

      if (guessLowercase===letters[j]){
        hiddenWord[j]=letters[j];
        document.getElementById("chosenWord").innerHTML = hiddenWord;
        makeWord = hiddenWord.join("");
        var lastWord = hiddenWord.join("");

      }
  }
      for (var k = 0; k < randomWord.length; k++) {
        if (guessLowercase==hiddenWord[k]){
          letterCounter+=1;
        }
      }
      if (!guessLowercase.includes(usedLetters)){
       alert("Please use letters only!");
     };
        if (letterCounter===0){
          lives-=1;
          document.getElementById("chances").innerHTML=lives;
        }
        if (lives<1){
          document.getElementById("gameOver").innerHTML="Try Again?";

        }
    }
  }

  // 3) roundComplete() function - Here we will have all of the code that needs to be run after each guess is made.
  // 4) Call the startGame() function at the end to reset the game
  startGame();
  checkedLetters();
  //End of Document Ready Function
  // });
