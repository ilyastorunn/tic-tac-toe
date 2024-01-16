import React, { useState } from "react";
import "./GameScreen.css";

export default function GameScreen() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const newBoard = [...board];

    if (calculateWinner(newBoard) || newBoard[index]) {
      return;
    }

    newBoard[index] = xIsNext ? "😅" : "🌮";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => {
    return (
      <div
        className={`box ${board[index]} ${xIsNext ? "playerX" : "playerO"}`}
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </div>
    );
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "😅" : "🌮"}`;

  return (
    <div className="gameScreen">
      <div className="playerEmojis">
        <div className={`players ${xIsNext ? "playerX" : "playerO"}`}>
          <div className="playerOne">
            <h4>😅</h4>
          </div>
          <div className="playerTwo">
            <h4>🌮</h4>
          </div>
        </div>
      </div>
      <div className="gameGrid">
        <div className="gameBox">
          <div className="gameBoxOne">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="gameBoxTwo">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="gameBoxThree">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
      <div className="status">{status}</div>
    </div>
  );
}

const calculateWinner = (squares) => {
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
};
