document.addEventListener('DOMContentLoaded', function () {
    const words = ['hangman', 'javascript', 'bootstrap', 'developer', 'programming'];
    let selectedWord = '';
    let guessedWord = [];
    let incorrectGuesses = 0;

    function startGame() {
        selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
        guessedWord = Array(selectedWord.length).fill('_');
        incorrectGuesses = 0;
        updateHangmanImage();
        updateWordToGuess();
    }

});