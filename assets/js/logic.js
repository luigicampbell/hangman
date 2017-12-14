// 2) checkedLetters() function - it's where we will do all the comparison for matches (edited)
// 3) roundComplete() function - Here we will have all of the code that needs to be run after each guess is made.
// 4) Call the startGame() function at the end to reset the game
// Variable declaration
//Ready Function
$(document).ready(function() {
var songList = ["TOM-SAWYER", "RED-BARCHETTA", "THE-TWILIGHT-ZONE", "YYZ", "LIMELIGHT", "MAKING-MEMORIES", "CROSSROADS" ];
var usedLetters=[];
var numberOfWins=0;
var guessesRemaining=12;
var blankWord=[]
var userGuess;
var userGuessCaps;
var previousIterationOfWord;
var guessCounter=0;
var wordLetter;
var randomWord;
var songSelection;

// Music playback
var x = document.getElementById("myAudio");
function playAudio() {
    x.play();
}
function pauseAudio() {
    x.pause();
}

function clearVar() {
	usedLetters=[];
	guessesRemaining=12;
	blankWord=[]
	userGuess;
	userGuessCaps;
	previousIterationOfWord;
	guessCounter=0;
	wordLetter;
	randomWord;
	document.getElementById("currentWord").innerHTML="";
	document.getElementById("dislayUsedLetters").innerHTML=usedLetters;

}

// chooses random song from the song list
function setUp(){
	songSelection = [Math.floor(Math.random()*songList.length)]
	randomWord=songList[songSelection];



	// converts the song into letters and puts letters into an array

	var wordLetter = randomWord.split("");



	// creates the blank output

	for (i=0; i<wordLetter.length; i++){
		if (wordLetter[i] === "-"){
				blankWord.push("-");
		}
		else {
			blankWord.push("_");
		}
	}


	document.getElementById("currentWord").innerHTML= blankWord;
}



// 1) startGame() function - how we will start and restart the game

function startGame() {
document.onkeyup = function (event){
	userGuess=event.key;
	userGuessCaps=userGuess.toUpperCase();
	usedLetters.push(userGuessCaps);
	document.getElementById("dislayUsedLetters").innerHTML=usedLetters;
	document.getElementById("guessesNumber").innerHTML=guessesRemaining;
	var wordConstruction;
	guessCounter=0;

		for (j=0; j<randomWord.length; j++){

			if (userGuessCaps===randomWord[j]){
				blankWord[j]=randomWord[j]
				document.getElementById("currentWord").innerHTML=blankWord;
				wordConstruction = blankWord.join("");
				previousIterationOfWord=blankWord.join("");

			}

		}

		// On wrong guess remove one remaining
		for (k=0; k<randomWord.length; k++){
			if (userGuessCaps==blankWord[k]){
				guessCounter+=1;
			}
		}
		if(guessCounter===0){
					guessesRemaining-=1;
					document.getElementById("guessesNumber").innerHTML=guessesRemaining;
				}

		// determine game over
		if (guessesRemaining<1){
			document.getElementById("gameOver").innerHTML="GAME OVER!";
			 alert("GAMEOVER!");
			 location.reload();
		}
		// win condition
		 if (wordConstruction===randomWord){
			numberOfWins+=1;

			// changes attributes of left content box to match conpleted puzzle
			if (songSelection==0){
				document.getElementById("songTitle").innerHTML="Tom Sawyer";
				document.getElementById("album").innerHTML="Moving Pictures";
				document.getElementById("myAudio"); myAudio.src='assets/music/tomsawyer.mp3'; myAudio.load(); playAudio();
				document.getElementById("albumArt").src='assets/images/movingpictures.jpg';
			}
			else if (songSelection==1){
				document.getElementById("myAudio"); myAudio.src='assets/music/redbarchetta.mp3'; myAudio.load(); playAudio();
				document.getElementById("songTitle").innerHTML="Red Barchetta";
				document.getElementById("album").innerHTML="Moving Pictures";
				document.getElementById("albumArt").src='assets/images/movingpictures.jpg';
			}
			else if (songSelection==2){
				document.getElementById("myAudio"); myAudio.src='assets/music/thetwilighzone.mp3'; myAudio.load(); playAudio();
				document.getElementById("songTitle").innerHTML="The Twilight Zone";
				document.getElementById("album").innerHTML="2112";
				document.getElementById("albumArt").src='assets/images/2112.png';
			}
			else if (songSelection==3){
				document.getElementById("myAudio"); myAudio.src='assets/music/yyz.mp3'; myAudio.load(); playAudio();
				document.getElementById("songTitle").innerHTML="YYZ";
				document.getElementById("album").innerHTML="Moving Pictures";
				document.getElementById("albumArt").src='assets/images/movingpictures.jpg';
			}
			else if (songSelection==4){
				document.getElementById("myAudio"); myAudio.src='assets/music/limelight.mp3'; myAudio.load(); playAudio();
				document.getElementById("songTitle").innerHTML="Limelight";
				document.getElementById("album").innerHTML="Moving Pictures";
				document.getElementById("albumArt").src='assets/images/movingpictures.jpg';
			}
			else if (songSelection==5){
				document.getElementById("myAudio"); myAudio.src='assets/music/makingmemories.mp3'; myAudio.load(); playAudio();
				document.getElementById("songTitle").innerHTML="Making Memories";
				document.getElementById("album").innerHTML="Fly By Night";
				document.getElementById("albumArt").src='assets/images/flybynight.jpg';
			}
			else {
				document.getElementById("myAudio"); myAudio.src='assets/music/crossroads.mp3'; myAudio.load(); playAudio();
				document.getElementById("songTitle").innerHTML="Crossroads";
				document.getElementById("album").innerHTML="Feedback";
				document.getElementById("albumArt").src='assets/images/feedback.jpg';
			}

			// start next work
			document.getElementById("winsNumber").innerHTML=numberOfWins;
			clearVar();
			setUp();
			startGame();



		}

}
}


// Game start on page load
document.addEventListener("load", setUp());
document.addEventListener("load", startGame());
//End of ready Function
});
