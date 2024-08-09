import React from "react";

function Guess({ guess }) {
  return (
    <p class="guess">
      {guess.split("").map((letter) => (
        <span class="cell">{letter}</span>
      ))}
    </p>
  );
}

export default Guess;
