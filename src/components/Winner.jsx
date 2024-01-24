import React from "react";
import "./Winner.css";
import Buttons from "./Buttons";
import { useParams } from "react-router-dom";

export default function Winner() {
  const { winnerName } = useParams();

  return (
    <div className="grid">
      <div className="text">
        <div className="result">
          <h4>
            Congratulations,
            <br />
            Player {winnerName} is the winner!
          </h4>
        </div>
      </div>
      <div className="buttons">
        <Buttons />
      </div>
    </div>
  );
}
