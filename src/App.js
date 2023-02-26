import React, { useState } from "react";
import "./styles.css";

var username = "Saksham";

const emojiDictionary = {
  "😊": "Smiling",
  "😂": "Laughing",
  "🥲": "Smile in Pain",
  "🫡": "Salute",
  "😑": "Annoyance"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === "undefined") {
      meaning = "We don't have this emoji";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  var emojisWeKnow = Object.keys(emojiDictionary);
  return (
    <div className="App">
      <h1>Hello Emoji</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
