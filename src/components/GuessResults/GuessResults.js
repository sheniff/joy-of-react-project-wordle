import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess, { EmptyGuess } from "../Guess/Guess";

function GuessResults({ results, answer }) {
  return (
    <div class="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) =>
        !!results[i] ? (
          <Guess key={results[i].id} guess={results[i].guess} answer={answer} />
        ) : (
          <EmptyGuess key={i} />
        )
      )}
    </div>
  );
}

export default GuessResults;
