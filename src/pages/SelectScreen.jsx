import React from "react";
import "./SelectScreen.css";
import { Link } from "react-router-dom";

export default function SelectScreen() {
  return (
    <>
      <div className="selectionBox">
        <div className="textBox">
            <h4>Select who you want to be</h4>
            <span></span>
        </div>
        <div className="emojiBox">
          <h4>👮</h4>
          <h5>OR</h5>
          <h4>🥰</h4>
        </div>
        <div className="buttonsBox">
          <div className="backButton">
            <Link to="/" className="back">Back</Link>
          </div>
          <div className="playButton">
            <Link to="/gamemode" className="play">Play</Link>
          </div>
        </div>
      </div>
    </>
  );
}
