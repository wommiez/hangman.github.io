let words = ["PIANO","HAND","COSMETIC"];
var game = {};

function new_game(){
    game = new_word();
    game.lives = 8;
    show_word(game.charactersToGuess);
    show_word2(game.charactersWord);
    show_image();
}

function new_word() {
    var i = random_number(words.length);
    var word = words[i];
    var charactersToGuess = Array(word.length).fill('_');
    var charactersWord = Array(word.length);
    var charactersUsed = Array();
    for(let i = 0; i < word.length; i++){
        charactersWord[i] = word.charAt(i);
    }
    let number_gaps = word.length;
    return {word: word, charactersToGuess: charactersToGuess, number_gaps: number_gaps, charactersWord: charactersWord, charactersUsed: charactersUsed};
}

function random_number(max){
    return Math.floor(Math.random() * max)
}

function show_word(character){
    var element = document.getElementById('gaps');
    element.textContent = character.join(' ');
}

function show_word2(character){
    var element = document.getElementById('wordtoguess');
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
        let repeated = false;
        let letterInWord = false;
        for(let i = 0; i < game.charactersUsed.length; i++){
            if(letterInserted === game.charactersUsed[i]){
                repeated = true;
                break;
            }
        }
        if(repeated === false){
            for(let i = 0; i < game.charactersWord.length; i++){
                if(letterInserted === game.charactersWord[i]){
                    letterInWord = true;
                    game.charactersToGuess[i] = letterInserted;
                    game.number_gaps = game.number_gaps-1;
                }
            }
            game.charactersUsed.push(letterInserted);
            if(game.number_gaps === 0){
                game_win();
            }
        }
        if(letterInWord === false){
            game.lives--;
            var element = document.getElementById('hangman_image');
            element.src = "img/hangman_"+game.lives+".png";
            if(game.lives === 0){
                game_loss();
            }
        }
        show_word(game.charactersToGuess);
        console.log("Letras restantes = "+game.number_gaps);
        console.log("Numero Vidas = "+game.lives);
    }
}

function game_loss() {
    alert("Perdiste");
}

function game_win() {
    alert("Ganaste")
}