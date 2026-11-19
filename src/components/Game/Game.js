import React, { useState } from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form';
import GuessList from '../GuessList/GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState(() => (
    range(0, NUM_OF_GUESSES_ALLOWED).map((e) => {
      return {
        id: e,
        value: '',
      }
    })
  ))

  const [gameStatus, setGameStatus] = useState("running")

  const handleSubmitGuess = (guess) => {
    const newGuess = {
      value: guess
    }
    const nextGuesses = [...guesses]

    const nextElement = nextGuesses.findIndex((e) => e.value === '')

    nextGuesses[nextElement] = newGuess

    setGuesses(nextGuesses)

    if (guess === answer) setGameStatus("won")
    else if (nextElement === 5) setGameStatus("lost")

  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <Form handleSubmitGuess={handleSubmitGuess} disabled={gameStatus !== "running"} />
      {gameStatus === "won" && <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{` ${guesses.findIndex((e) => e.value === answer) + 1} guesses`}</strong>
        </p>
      </div>}

      {
        gameStatus === "lost" && <div className='sad banner'>
          <p>sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      }
    </>
  )
}

export default Game;
