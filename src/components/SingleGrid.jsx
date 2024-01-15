import React from "react";
import "./SingleGrid.css";
import Buttons from "./Buttons";

export default function SingleGrid() {
  return (
    <div className="grid">
        <div className="text">
            <div className="emoji">
            <h4>🏆</h4>
            </div>
            <div className="result">
                <h4>Congrats, you won!</h4>
            </div>
        </div>
      <div className="buttons">
        <Buttons />
      </div>
    </div>
  );
}