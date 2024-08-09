import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessResults({ results }) {
  return (
    <div class="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess key={results[i] ? results[i].id : i} guess={results[i] ? results[i].guess : "     "} />
      ))}
    </div>
  );
}

export default GuessResults;
