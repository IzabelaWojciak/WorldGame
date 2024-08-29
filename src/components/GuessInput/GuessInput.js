import React, {useState} from 'react';

function GuessInput({handleSubmitGuess, disabled}) {

  const [unconfirmedGuess, setUnconfirmedGuess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(unconfirmedGuess);
      setUnconfirmedGuess('');
  }

  return (
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
            id="guess-input"
            type="text" value={unconfirmedGuess}
            onChange={(event) => {
                const nextGuess = event.target.value.toUpperCase();
                setUnconfirmedGuess(nextGuess);
            }}
            pattern=".{5,5}"
            required
            disabled={disabled}
        />
      </form>
  );
}

export default GuessInput;
