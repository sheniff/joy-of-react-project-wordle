import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);
  const [success, setSuccess] = React.useState(false);

  const handleGuess = (guess) => {
    setResults([
      ...results,
      {
        id: Math.random(),
        guess,
      },
    ]);
    setSuccess(guess === answer);
  };

  const gameOver = success || results.length >= NUM_OF_GUESSES_ALLOWED;

  return (
    <>
      {gameOver && (
        <Banner answer={answer} attempts={results.length} success={success} />
      )}
      <GuessResults results={results} answer={answer} />
      <GuessInput onGuess={handleGuess} disabled={gameOver} />
    </>
  );
}

export default Game;
