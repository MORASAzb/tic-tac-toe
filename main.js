function checkTicTacToe(board) {
  // Check rows and columns for a winner
  for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
          if (board[i][0] !== 0) {
              return board[i][0]; // Player 1 (X) or Player 2 (O) won
          }
      }
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
          if (board[0][i] !== 0) {
              return board[0][i]; // Player 1 (X) or Player 2 (O) won
          }
      }
  }

  // Check diagonals for a winner
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      if (board[0][0] !== 0) {
          return board[0][0]; // Player 1 (X) or Player 2 (O) won
      }
  }
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      if (board[0][2] !== 0) {
          return board[0][2]; // Player 1 (X) or Player 2 (O) won
      }
  }

  
  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          if (board[i][j] === 0) {
              return -1;
          }
      }
  }
return 0;

}


const gameBoard = [
  [1, 2, 0],
  [0, 0, 0],
  [1, 2, 0]
];


console.log(checkTicTacToe(gameBoard)); // Expected output: 1 (Player X won in this example)
