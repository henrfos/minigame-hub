let secretNumber;
let attempts = 0;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('attempts').textContent = attempts;
    document.getElementById('message').textContent = '';
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById('message').textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;

    if (userGuess === secretNumber) {
        document.getElementById('message').textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
    } else if (userGuess < secretNumber) {
        document.getElementById('message').textContent = 'Too low! Try again.';
    } else {
        document.getElementById('message').textContent = 'Too high! Try again.';
    }

    document.getElementById('attempts').textContent = attempts;
}

function resetGame() {
    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';
    startGame();
}

// Start the game on page load
window.onload = startGame;