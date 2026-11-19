import React, { useState } from 'react';

function Form({ handleSubmitGuess, disabled }) {

  const [inputValue, setInputValue] = useState('')
  return (
    <form className='guess-input-wrapper' onSubmit={(event) => {
      event.preventDefault()
      handleSubmitGuess(inputValue)
      setInputValue('')
    }}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input id='guess-input' type='text' pattern='[A-Z]{5}' disabled={disabled} value={inputValue} onChange={(event) => {
        setInputValue(event.target.value.toUpperCase())
      }}></input>
    </form>
  );
}

export default Form;
