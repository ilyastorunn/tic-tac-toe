import React from "react";
import "./Buttons.css";

export default function Buttons() {
  return (
    <>
      <div className="buttonGrid">
        <div className="resetButton">
          <a>Reset</a>
        </div>
        <div className="homeButton">
          <a>Home</a>
        </div>
      </div>
    </>
  );
}
