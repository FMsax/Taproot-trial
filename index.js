let board = document.querySelector('.board');
let squares = document.querySelectorAll('.square');
let currentPlayer = 'X'; // X goes first

// Computer's turn
function computerTurn() {
  // Choose a random empty square
  let emptySquares = squares.filter(square => square.classList.length === 1);
  let randomSquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
  randomSquare.classList.add('x-image');
}

// Player's turn
board.addEventListener('click', function(event) {
  if (event.target.classList.length === 1) { // Check if square is empty
    event.target.classList.add('o-image');
    currentPlayer = 'X'; // Switch to computer's turn
    computerTurn();
  }
});

// Initialize game with computer's first move
computerTurn();
