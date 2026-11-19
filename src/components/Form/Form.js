import React, { useState } from 'react';

function Form({ onSave, disabled }) {

  const [inputValue, setInputValue] = useState('')
  return (
    <form className='guess-input-wrapper' onSubmit={(event) => {
      event.preventDefault()
      onSave(inputValue)
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
