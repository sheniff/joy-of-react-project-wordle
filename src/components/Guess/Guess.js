import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess, answer }) {
  const check = checkGuess(guess, answer);
  return (
    <p className="guess">
      {check.map(({letter, status}) => (
        <span className={`cell ${status}`}>{letter}</span>
      ))}
    </p>
  );
}

export function EmptyGuess() {
  return (
    <p className="guess">
      {range(0, 5).map(() => (
        <span className="cell"></span>
      ))}
    </p>
  );
}

export default Guess;
