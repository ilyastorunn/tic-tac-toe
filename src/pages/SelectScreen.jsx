import React, { useState, useEffect } from "react";
import "./SelectScreen.css";
import { Link } from "react-router-dom";

const SelectScreen = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [randomEmoji1, setRandomEmoji1] = useState(null);
  const [randomEmoji2, setRandomEmoji2] = useState(null);

  useEffect(() => {
    const emojis = ["👮", "🥰", "😎", "🐱", "🚀", "🌈", "🍕", "🎉"];

    const randomIndex1 = Math.floor(Math.random() * emojis.length);
    const randomIndex2 = Math.floor(Math.random() * emojis.length);

    setRandomEmoji1(emojis[randomIndex1]);
    setRandomEmoji2(emojis[randomIndex2]);
  }, []);

  const handleEmojiSelection = (emoji) => {
    setSelectedEmoji(emoji);
  };

  return (
    <>
      <div className="selectionBox">
        <div className="textBox">
          <h4>Select who you want to be</h4>
          <span></span>
        </div>
        <div className="emojiBox">
          {selectedEmoji ? (
            <>
              <h4>{selectedEmoji}</h4>
              <h5>OR</h5>
              <h4>
                {selectedEmoji === randomEmoji1 ? randomEmoji2 : randomEmoji1}
              </h4>
            </>
          ) : (
            <>
              <h4 onClick={() => handleEmojiSelection(randomEmoji1)}>
                {randomEmoji1}
              </h4>
              <h5>OR</h5>
              <h4 onClick={() => handleEmojiSelection(randomEmoji2)}>
                {randomEmoji2}
              </h4>
            </>
          )}
        </div>
        <div className="buttonsBox">
          <div className="backButton">
            <Link to="/" className="back">
              Back
            </Link>
          </div>
          {selectedEmoji && (
            <div className="playButton">
              <Link
                to={{
                  pathname: "/game",
                  state: { selectedEmoji, randomEmoji1, randomEmoji2 },
                }}
                className="play"
              >
                Play
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SelectScreen;
