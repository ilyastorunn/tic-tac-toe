import React from "react";
import "./GameMode.css";

export default function GameMode() {
  return (
    <>
      <div className="gameMode">
        <div className="gameModeBox">
          <div className="gameModeText">
            <h4>Select the Game Mode</h4>
            <span></span>
          </div>
          <div className="gameModeButtons">
            <div className="easyButton">
              <a className="easy">Easy</a>
            </div>
            <div className="hardButton">
              <a className="hard">Hard</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
