import React from "react";

function GuessInput({ onGuess, disabled }) {
  const [answer, setAnswer] = React.useState("");

  const handleChange = (e) => {
    setAnswer(e.target.value.toUpperCase().slice(0, 6));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuess(answer);
    setAnswer("");
  };

  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmit}>
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={answer}
        onChange={handleChange}
        maxLength={5}
        pattern="[A-Z]{5}"
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
