import React from "react";
import "./MultiGrid.css";
import Buttons from "./Buttons";

export default function MultiGrid() {
  return (
    <div className="grid">
      <div className="text">
        <div className="result">
          <h4>
            Congratulations,
            <br />
            Player 😤 is the winner!
          </h4>
        </div>
      </div>
      <div className="buttons">
        <Buttons />
      </div>
    </div>
  );
}
