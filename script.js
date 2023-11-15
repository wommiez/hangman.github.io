let words = [
    "PILAGE",
    "INNOCUOUS",
    "COSMETIC", 
    "FANTASTIC", 
    "LUSCIOUS",
    "SINISTER",
    "PALEOLITIC",
    "DISCERN",
    "WONDROUS",
    "CLAMMY",
    "RUSTLE",
    "CAMOUFLAGE",
    "KISMET",
    "BARBARIC",
    "VENTRILOQUIST",
    "DANDELION",
    "WRETCHED",
    "HARBINGER",
    "ZEALOUS",
    "EARTHBOUND"
];
var game = {};
var results = {wins: 0, losses: 0};

function update_menu(nickname){
    var element = document.getElementById('user');
    element.textContent = nickname.value;
    update_results();
    new_game();
}

function update_results(){
    var wins = document.getElementById('wins');
    wins.textContent = results.wins;
    var losses = document.getElementById('losses');
    losses.textContent = results.losses;
}

function new_game(){
game = new_word();
game.lives = 9;
show_word(game.charactersToGuess);
show_incorrect(game.charactersUsed);
show_image();
}

function new_word() {
var i = random_number(words.length);
var word = words[i];
var charactersToGuess = Array(word.length).fill('_');
var charactersWord = Array(word.length);
var charactersUsed = Array();
var charactersIncorrect = Array();
for(let i = 0; i < word.length; i++){
charactersWord[i] = word.charAt(i);
}
let number_gaps = word.length;
return {word: word, charactersToGuess: charactersToGuess, number_gaps: number_gaps, charactersWord: charactersWord, charactersUsed: charactersUsed, charactersIncorrect: charactersIncorrect};
}

function random_number(max){
return Math.floor(Math.random() * max)
}

function show_word(character){
var element = document.getElementById('gaps');
element.textContent = character.join(' ');
}

function show_incorrect(character){
var element = document.getElementById('incorrect_letters');
element.textContent = character.join(' ');
}

function show_image(){
var element = document.getElementById('hangman_image');
element.src = "img/hangman_"+game.lives+".png";
}

function letter_send(letter){
var letterInserted = letter.value.toUpperCase();
letter.value = "";
if(/^[A-Z]$/.test(letterInserted)) {
    letter.value = "";
    let repeated = false; //The letter is already used
    let letterInWord = false; // The letter is in the word
    for(let i = 0; i < game.charactersUsed.length; i++){ //Search if we used the letter
        if(letterInserted === game.charactersUsed[i]){
            repeated = true;
            break;
        }
    }
    if(repeated === false){ //If not used -> maybe is in the word
        for(let i = 0; i < game.charactersWord.length; i++){ //Search if the letter is in the word
            if(letterInserted === game.charactersWord[i]){ //We search in every character
                letterInWord = true;
                game.charactersToGuess[i] = letterInserted;
                game.number_gaps = game.number_gaps-1;
            }
        }
        game.charactersUsed.push(letterInserted); //We insert the letter for knowing we used it

        if(game.number_gaps === 0){
            game_win();
        }
    }
    if(letterInWord === false){ //If the letter isn't in the word  
        game.charactersIncorrect.push(letterInserted); //Even if the letter was correct but they put it again, is a lossed live
        game.lives--;
        var element = document.getElementById('hangman_image');
        element.src = "img/hangman_"+game.lives+".png"; //Update image
        if(game.lives === 0){
            game_loss();
        }
    }
    show_word(game.charactersToGuess); //Gaps
    show_incorrect(game.charactersIncorrect); //Show characters incorrect (wrong + repeted right)
    console.log("Letras restantes = "+game.number_gaps);
    console.log("Numero Vidas = "+game.lives);
    }
}

function game_loss() {
alert("You lost!\n The word was: "+game.word);
results.losses++;
update_results();
}

function game_win() {
alert("You won!")
results.wins++;
update_results();
}

