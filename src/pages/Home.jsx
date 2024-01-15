import React from "react";
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
            <a>Single Player</a>
          </div>
          <div className="button">
            <a>Multi Player</a>
          </div>
        </div>
        <div className="author">
          <p>Made with love by ilyas torun</p>
        </div>
      </div>
    </>
  );
}
