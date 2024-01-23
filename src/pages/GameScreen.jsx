import React, { useEffect, useState } from "react";
import "./GameScreen.css";
import { useNavigate } from "react-router-dom";

const emojis = ["😅", "🌮", "🚀", "🍕", "🎉", "🎸", "🍔", "🏆", "🌈", "⚡️"];

export default function GameScreen() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [playerEmojis, setPlayerEmojis] = useState(randomEmojis());
  const navigate = useNavigate();

  function randomEmojis() {
    let emoji1, emoji2;
    do {
      const randomIndexes = Array.from({ length: 2 }, () =>
        Math.floor(Math.random() * emojis.length)
      );
      emoji1 = emojis[randomIndexes[0]];
      emoji2 = emojis[randomIndexes[1]];
    } while (emoji1 === emoji2);

    return [emoji1, emoji2];
  }

  const handleClick = (index) => {
    const newBoard = [...board];

    if (calculateWinner(newBoard) || newBoard[index]) {
      return;
    }

    newBoard[index] = xIsNext ? playerEmojis[0] : playerEmojis[1];
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

  useEffect(() => {
    if (winner) {
      navigate(`/winner/${winner}`);
    } else {
      setPlayerEmojis(randomEmojis());
    }
  }, [winner, navigate]);

  const status = winner
    ? `Congratulations, Player ${winner} is the winner!`
    : `Next player: ${xIsNext ? playerEmojis[0] : playerEmojis[1]}`;

  return (
    <div className="gameScreen">
      <div className="playerEmojis">
        <div className={`players ${xIsNext ? "playerX" : "playerO"}`}>
          <h4 className="status">{status}</h4>
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
