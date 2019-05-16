function Hangman(word) {
    var word = String(word).toLowerCase();

    var errorsLeft = 6;

    var wrongSymbols = []; 

    var guessedString = [];
    for (let i = 0; i < word.length; i++) {
        guessedString[i] = "_";
    }

    this.startAgain = function(newWord) {
        word = String(newWord).toLowerCase();
        errorsLeft = 6;
        wrongSymbols = [];
        for (let i = 0; i < word.length; i++) {
            guessedString[i] = "_";
        }
        return this;
    }

    this.getGuessedString = function() {
        return guessedString.join("");
    }

    this.getErrorsLeft = function() {
        return errorsLeft;
    }

    this.getWrongSymbols = function() {
        return wrongSymbols;
    }

    this.getStatus = function() {
        console.log(this.getGuessedString() + " | errors left " + errorsLeft);
    }

    this.guess = function(letter) {
        if (errorsLeft > 0 && word !== this.getGuessedString()) {
            letter = String(letter).toLowerCase();
            var guessEfficiency = false;
    
            for (let i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    guessedString[i] = letter;
                    guessEfficiency = true;
                }     
            }
  
            if (guessEfficiency) {
                if (word !== this.getGuessedString()) {
                    console.log(this.getGuessedString());
                } else {
                    console.log(this.getGuessedString() + " | You won!");
                }
            } else {
                errorsLeft--;
                wrongSymbols.push(letter);

                if (errorsLeft > 0) {
                    console.log("wrong letter, errors left " + errorsLeft + " | " + wrongSymbols.join(","));
                } else {
                    console.log("wrong letter, errors left " + errorsLeft + " | " + wrongSymbols.join(",") + " | You lose!");
                }
            }
        } else {
            console.log("Game over!!!");
        }
        return this;
    }
}

var hangman = new Hangman('WEBpurple');

hangman.guess('w'); 
hangman.guess('e'); 
hangman.guess('a');
hangman.guess('p');
hangman.guess('k');

console.log(hangman.getGuessedString());

console.log(hangman.getErrorsLeft());

console.log(hangman.getWrongSymbols());

hangman.getStatus();

hangman.guess('b')
  .guess('l')
  .guess('u')
  .guess('R');

hangman.startAgain('webpurple')
  .guess('w')
  .getStatus();

hangman.guess('a')
  .guess('c')
  .guess('d')
  .guess('z')
  .guess('x')
  .guess('m');

hangman.guess("e");
