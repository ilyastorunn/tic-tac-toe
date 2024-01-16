import React from "react";
import "./GameMode.css";
import { Link } from "react-router-dom";

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
              <Link to="/game" className="easy">Easy</Link>
            </div>
            <div className="hardButton">
              <Link to="/game" className="hard">Hard</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
