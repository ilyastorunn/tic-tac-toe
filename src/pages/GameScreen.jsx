import React from "react";
import "./GameScreen.css";

export default function GameScreen() {
  return (
    <div className="gameScreen">
      <div className="playerEmojis">
        <div className="players">
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
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <div className="gameBoxTwo">
            <div className="four"></div>
            <div className="five"></div>
            <div className="six"></div>
          </div>
          <div className="gameBoxThree">
            <div className="seven"></div>
            <div className="eight"></div>
            <div className="nine"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
