// <!-- // computer choose random letter -->
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        
var wins = 0;
var losses = 0;
var guessCount = 9;
var emptyArray = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessCountText = document.getElementById("guesscount-text");
var yourGuessText = document.getElementById("yourguess-text");



var computerChoice = options[Math.floor(Math.random()*options.length)];
    console.log("Computer Choice is " + computerChoice);


    document.onkeyup = function(event) {
    var userGuess= event.key.toLowerCase();
    console.log("my guess: " + userGuess);
        
    if (computerChoice === userGuess) {

        wins++;
        emptyArray = [];
        guessCount = 9;

        function reset() {
        // userGuess.length = 0;

        computerChoice =
        options[Math.floor(Math.random()* options.length)];
        console.log("new computer choice:  " + computerChoice);
        }
        reset();
        
        }

        else {
            guessCount--;
        }


    if (guessCount === 0) {
        
       losses++;
       guessCount = 9;
       emptyArray = [];
       function reset () {
        //    userGuess.length = 0;
           computerChoice = options[Math.floor(Math.random()*options.length)];
           console.log("new computer choice:  " + computerChoice);
       }
       reset();
    }
    
    emptyArray.push(userGuess)
    

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessCountText.textContent = "Guesses Left: " + guessCount;
    yourGuessText.textContent = "Your Guesses so far: " + emptyArray;
    
        
    }
    
