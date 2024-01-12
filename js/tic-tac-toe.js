let currentPlayer = 'X';
    let gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    function handleClick(row, col) {
        if (gameBoard[row][col] === '' && !checkWinner()) {
            gameBoard[row][col] = currentPlayer;
            renderBoard();
            if (checkWinner()) {
                document.getElementById('message').innerText = `${currentPlayer} wins!`;
            } else if (isBoardFull()) {
                document.getElementById('message').innerText = 'It\'s a tie!';
            } else {
                currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            }
        }
    }

function renderBoard(){

}

function checkWinner() {

}

function isBoardFull(){

}