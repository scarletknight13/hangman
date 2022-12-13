import './App.css';
import Board from './components/board/Board';
import Keyboard from './components/keyboard/Keyboard';
import {useEffect, useState} from 'react'
import WordContainer from './components/wordContainer/WordContainer';
function App() {

  const [guessedLetters, setGuessedLetters] = useState({});
  const [wrongGuesses, setWrongGuesses] = useState(new Set());
  const [gameState, setGameState] = useState('default');

  const setSeen = (newSeen) => {
    setGuessedLetters(newSeen);
  }
  const updateWrongGuesses = (letter) => {
    const newWrongGuesses = new Set(wrongGuesses);
    newWrongGuesses.add(letter)
    setWrongGuesses(newWrongGuesses);

  }
  const updateGameState = (newGameState) =>{
    setGameState(newGameState);
  }
  useEffect(() => {
    if(gameState === 'Lost' || gameState === 'Won'){
      setWrongGuesses(new Set());
      setGuessedLetters({});
    }
  }, [gameState])
  console.log(typeof setSeen);
  const word = 'Harry Potter'.toLowerCase();
  return (
    <div className="App">
      {gameState === 'active' ? (
        <>
          <Board wrongGuesses={wrongGuesses} updateGameState={updateGameState}/>
          <WordContainer key='word-container-1' word={word} seen={guessedLetters}/>
          <Keyboard word={word} seen={guessedLetters} setSeen={setSeen} setWrongGuesses={setWrongGuesses} updateWrongGuesses={updateWrongGuesses}/>
        </>
      ) : (
        <>
          <h1>HangMan</h1>
          <button onClick={(e)=>updateGameState('active')}>Play</button>
        </>
      )}
    </div>
  );
}

export default App;
