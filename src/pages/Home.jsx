import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="homeBox">
        <div className="emojiGrid">
          <h4>😄</h4>
        </div>
        <div className="title">
          <h1>tic tac toe</h1>
        </div>
        <div className="buttons">
          <div className="button">
            <Link className="buttonLink" to="/game">Play!</Link>
          </div>
        </div>
        <div className="author">
          <p>Made with love by ilyas torun</p>
        </div>
      </div>
    </>
  );
}
