document.addEventListener('DOMContentLoaded', function () {
    const words = ['javascript', 'programming', 'web', 'developer', 'scramble'];
    let scrambledWord = '';
    let originalWord = '';

    function startGame() {
        originalWord = words[Math.floor(Math.random() * words.length)];
        scrambledWord = scrambleWord(originalWord);
        updateScrambledWord();
    }

    function scrambleWord(word) {
        const wordArray = word.split('');
        for (let i = wordArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }
        return wordArray.join('');
    }

    function updateScrambledWord() {
        const scrambledWordElement = document.getElementById('scrambledWord');
        scrambledWordElement.textContent = scrambledWord;
    }

    function handleGuess() {
        const userInput = document.getElementById('userInput').value.toLowerCase();
        if (userInput === originalWord) {
            alert('Congratulations! You guessed the word.');
            startGame();
        } else {
            alert('Incorrect. Try again!');
        }
        document.getElementById('userInput').value = '';
    }

    startGame();

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', handleGuess);
});