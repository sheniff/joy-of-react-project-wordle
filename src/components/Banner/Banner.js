import React from "react";

function Banner({ attempts, answer, success }) {
  return (
    <div className={`${success ? "happy" : "sad"} banner`}>
      {success ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{attempts} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
