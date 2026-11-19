import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from './../../constants'
import { checkGuess } from './../../game-helpers'

function GuessList({ guesses, answer }) {
  const guessWithStatus = (guess) => checkGuess(guess, answer)

  return <div>
    {
      guesses.map((guess) => (
        <p className='guess' key={crypto.randomUUID()}>
          {
            guess.value ? Array.from(guessWithStatus(guess.value)).map(({ letter, status }) => (
              <span className={`cell ${status}`} key={crypto.randomUUID()}>{letter}</span>
            ))
              : range(0, NUM_OF_GUESSES_ALLOWED).map((space) => (
                <span className='cell' key={crypto.randomUUID()} />
              ))
          }

        </p>
      ))
    }
  </div>;
}

export default GuessList;
