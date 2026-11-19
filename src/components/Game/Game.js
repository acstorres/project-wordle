import React, { useState } from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form';
import GuessList from '../GuessList/GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState(() => (
    range(0, 6).map((e) => {
      return {
        id: e,
        value: '',
      }
    })
  ))

  const [showWinAlert, setShowWinAlert] = useState(false)
  const [showLoserAlert, setShowLoserAlert] = useState(false)

  const addGuess = (guess) => {
    const newGuess = {
      value: guess
    }
    const nextGuesses = [...guesses]

    const nextElement = nextGuesses.findIndex((e) => e.value === '')

    nextGuesses[nextElement] = newGuess

    setGuesses(nextGuesses)

    if (guess === answer) setShowWinAlert(true)
    else if (nextElement === 5) setShowLoserAlert(true)

  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <Form onSave={addGuess} disabled={showLoserAlert || showWinAlert} />
      {showWinAlert && <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{` ${guesses.findIndex((e) => e.value === answer) + 1} guesses`}</strong>
        </p>
      </div>}

      {
        showLoserAlert && <div className='sad banner'>
          <p>sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      }
    </>
  )
}

export default Game;
