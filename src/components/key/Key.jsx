import React from 'react'
import { useState } from 'react'
import './key.css'
const Key = ({word, letter, seen, setSeen, wrongGuesses, updateWrongGuesses}) => {
  const [guessed, setGuessed] = useState(false)
  const [letterState, setLetterState] = useState('')
  const handleClick = (e) =>{
    setGuessed(true);
    const newSeen = {...seen};
    const addedLetter = e.target.innerText.toLowerCase(); 
    console.log(addedLetter);
    newSeen[addedLetter] = 'true';
    const newLetterState = word.includes(addedLetter);
    if(!newLetterState){
      updateWrongGuesses(addedLetter);
    }
    setLetterState(newLetterState ? 'correct' : 'wrong')
    console.log(newSeen);
    setSeen(newSeen);
  }
  return (
    <button disabled={guessed === true ? true : false} className={'Key ' + (letterState) } onClick={(e) => handleClick(e)}>{letter}</button>
  )
}

export default Key