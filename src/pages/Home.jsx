import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="box">
        <div className="emojiGrid">
          <h4>😄</h4>
        </div>
        <div className="title">
          <h1>tic tac toe</h1>
        </div>
        <div className="buttons">
          <div className="button">
          <Link className="buttonLink" to="/selection">Single Player</Link>
          </div>
          <div className="button">
            <Link className="buttonLink" to="/game">Multi Player</Link>
          </div>
        </div>
        <div className="author">
          <p>Made with love by ilyas torun</p>
        </div>
      </div>
    </>
  );
}
