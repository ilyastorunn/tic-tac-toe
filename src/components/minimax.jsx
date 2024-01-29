export function minimax(board, depth, isMaximizing) {
  const winner = calculateWinner(board);

  if (winner !== null) {
    return winner === "X" ? 1 : -1;
  }

  if (isBoardFull(board)) {
    return 0;
  }

  if (isMaximizing) {
    let maxEval = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === "") {
          board[i][j] = "X";
          const evaluation = minimax(board, depth + 1, false);
          board[i][j] = "";
          maxEval = Math.max(maxEval, eval);
        }
      }
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === "") {
          board[i][j] = "O";
          const evaluation = minimax(board, depth + 1, true);
          board[i][j] = "";
          minEval = Math.min(minEval, evaluation);
        }
      }
    }
    return minEval;
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function isBoardFull(board) {
  return board.flat().every((cell) => cell !== "");
}
