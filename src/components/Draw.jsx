import React from "react";
import "./Draw.css";
import Buttons from "./Buttons";

export default function Draw() {
  return (
    <div className="grid">
        <div className="text">
            <div className="emoji">
            <h4>🤝</h4>
            </div>
            <div className="result">
                <h4>It's a Draw!</h4>
            </div>
        </div>
      <div className="buttons">
        <Buttons />
      </div>
    </div>
  );
}