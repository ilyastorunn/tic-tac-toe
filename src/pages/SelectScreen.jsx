import React from "react";
import "./SelectScreen.css";

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
            <a className="back">Back</a>
          </div>
          <div className="playButton">
            <a className="play">Play</a>
          </div>
        </div>
      </div>
    </>
  );
}
