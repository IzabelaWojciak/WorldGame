import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = useState([]);
    const [status, setStatus] = useState('running');

    function handleSubmitGuess(unconfirmedGuess) {
        if (unconfirmedGuess === answer) {
            setStatus('won');
        }
        const nextGuesses = [...guesses, unconfirmedGuess];
        setGuesses(nextGuesses);

        if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
            setStatus('lost');
        }
    }

  return (
      <>
          <GuessResults guesses={guesses} answer={answer}/>
          <GuessInput handleSubmitGuess={handleSubmitGuess} disabled={status !== 'running'}/>

          {status === 'won' && (<WonBanner numberOfGuesses={guesses.length}></WonBanner>)}
          {status === 'lost' && (<LostBanner answer={answer}></LostBanner>)}
      </>
  );
}

export default Game;
