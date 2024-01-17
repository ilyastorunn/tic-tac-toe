import React from "react";
import "./Buttons.css";
import { Link } from "react-router-dom";

export default function Buttons() {
  return (
    <>
      <div className="buttonGrid">
        <div className="resetButton">
          <Link className="navButtons" to="/game">Reset</Link>
        </div>
        <div className="homeButton">
          <Link className="navButtons" to="/">Home</Link>
        </div>
      </div>
    </>
  );
}
